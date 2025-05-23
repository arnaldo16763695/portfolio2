import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import { useTranslations } from 'next-intl';


const Services = () => {
    const t = useTranslations('Services');
    const servicesData = [
        {
            icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
            title: t('web-design'),
            description: t('web-design-description'),
        },
        {
            icon: <Blocks size={72} strokeWidth={0.8} />,
            title: t('web-development'),
            description: t('web-development-description')
        },
        // {
        //   icon: <Gem size={72} strokeWidth={0.8} />,
        //   title: t('app-development'),
        //   description: t('app-development-description')
        // },
    ];
    return (
        <section className='mb-12 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>{t('service-title')}</h2>
                {/* grid items  */}
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {
                        servicesData.map((item, index) => {
                            return (
                                <Card key={index} className='w-full max-w-[525px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'>
                                    <CardHeader className='text-primary absolute -top-[60px]'>
                                        <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                                    </CardHeader>
                                    <CardContent className='text-center p-4'>
                                        <CardTitle className="mb-4">{item.title}</CardTitle>
                                        <CardDescription className='text-lg'>{item.description}</CardDescription>
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