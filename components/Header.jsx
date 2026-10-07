'use client'
import ThemeToggler from '@/components/ThemeToggler';
import { useState, useEffect } from 'react';
import Logo from '@/components/Logo'
import Nav from '@/components/Nav'
import MobileNav from './MobileNav';
import { usePathname } from '@/i18n/routing';
import LocalSwicher from './LocalSwicher';

const Header = () => {
    const [header, setHeader] = useState(false);
    // ruta sin el prefijo del idioma (ej. "/" en /es)
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setHeader(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        //remove event
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className={`${header ? 'py-4 bg-white shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fef9f5]'}`}>
            <div className="container mx-auto">
                <div className='flex justify-between items-center px-2'>
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        <Nav containerStyles='hidden xl:flex gap-x-8 items-center' linkStyles={'relative hover:text-primary transition-all'} underlineStyles={'absolute left-0 top-full h-[2px] bg-primary w-full'} />
                        <LocalSwicher />
                        <ThemeToggler />
                        {/* mobile nav */}
                        <div className='xl:hidden'>
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
