import  Image  from 'next/image'
import { Link } from '@/i18n/routing'

const Logo = () => {
    return (
        // <Link href='/' ><Image src='/logo.svg' alt='logo' width={54} height={54} priority /></Link>
        <Link href='/' ><Image src='/logo.png' alt='ajedev' width={54} height={54} priority /></Link>
    )
}

export default Logo