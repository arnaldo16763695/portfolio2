// import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';


const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const t = useTranslations('NavLinks');
    const links = [
        { path: '/', name: t('title1') },
        { path: '/projects', name: t('title2') },
        { path: '/contact', name: t('title3') },
    ]
    const pathName = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => (
                <Link href={link.path} key={index} className={`capitalize ${linkStyles}`} >
                    {link.path === pathName && (
                        <motion.span
                            initial={{ y: '-100%' }}
                            animate={{ y: 0 }}
                            transition={{ type: 'tween' }}
                            layoutId='underline'
                            className={`${underlineStyles}`}
                        />
                    )}
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}

export default Nav