import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


const Cta = () => {
    const t = useTranslations('Cta')
    return (
        <section className='py-24 bg-tertiary dark:bg-secondary/40'>
            <div className='container mx-auto'>
                <div className='flex flex-col items-center'>
                    <h2 className='h2 max-w-xl text-center mb-8'>
                       {t('cta-description')}
                    </h2>
                    <Link href='/contact'><Button>{t('contact')}</Button></Link>
                </div>
            </div>
        </section>
    )
}

export default Cta