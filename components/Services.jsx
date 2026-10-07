import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GanttChartSquare, Blocks, Search, Network, ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';


const Services = () => {
    const t = useTranslations('Services');
    const servicesData = [
        {
            icon: <Blocks size={72} strokeWidth={0.8} />,
            title: t('web-development'),
            description: t('web-development-description')
        },
        {
            icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
            title: t('web-design'),
            description: t('web-design-description'),
        },
        {
            icon: <Search size={72} strokeWidth={0.8} />,
            title: t('seo'),
            description: t('seo-description'),
        },
        {
            icon: <Network size={72} strokeWidth={0.8} />,
            title: t('networks'),
            description: t('networks-description'),
            href: '/networks',
            linkText: t('networks-more'),
        },
    ];
    return (
        <section className='mb-12 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>{t('service-title')}</h2>
                {/* grid items  */}
                <div className='grid md:grid-cols-2 justify-items-center gap-y-20 xl:gap-y-24 md:gap-x-8'>
                    {
                        servicesData.map((item, index) => {
                            return (
                                <Card key={index} className='w-full max-w-[525px] min-h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'>
                                    <CardHeader className='text-primary absolute -top-[60px]'>
                                        <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                                    </CardHeader>
                                    <CardContent className='text-center p-4'>
                                        <CardTitle className="mb-4">{item.title}</CardTitle>
                                        <CardDescription className='text-lg'>{item.description}</CardDescription>
                                        {item.href && (
                                            <Link href={item.href} className='inline-flex items-center gap-x-2 mt-4 text-primary font-medium hover:underline'>
                                                {item.linkText}<ArrowRight size={18} />
                                            </Link>
                                        )}
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services
