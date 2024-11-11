import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
    { path: '/', name: "inicio" },
    { path: '/projects', name: "mis proyectos" },
    { path: '/contact', name: "contacto" },
]

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
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
                            className={ `${underlineStyles}` }
                        />
                    )}
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}

export default Nav