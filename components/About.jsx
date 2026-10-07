import DevImg from '@/components/DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, Briefcase, User2, PhoneCall, MailIcon, HomeIcon } from 'lucide-react';
import { contactData, experienceData, educationData, skillData, toolsData } from '@/app/lib/data';
import { useTranslations } from 'next-intl';

// línea de tiempo usada en experiencia y educación
const Timeline = ({ items }) => (
    <div className='flex flex-col gap-y-8'>
        {items.map(({ title, subtitle, year }, index) => (
            <div className='flex gap-x-8 group' key={index}>
                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                </div>
                <div>
                    <div className='font-semibold text-xl leading-none mb-2'>{title}</div>
                    <div className='text-lg leading-none text-muted-foreground mb-4'>{subtitle}</div>
                    <div className='text-base font-medium'>{year}</div>
                </div>
            </div>
        ))}
    </div>
)

const About = () => {
    const t = useTranslations('About');

    const infoData = [
        { icon: <User2 size={20} />, text: contactData.name },
        { icon: <PhoneCall size={20} />, text: contactData.phone },
        { icon: <MailIcon size={20} />, text: contactData.email },
        { icon: <GraduationCap size={20} />, text: t('degrees.systems-engineer') },
        { icon: <HomeIcon size={20} />, text: contactData.location },
    ];

    // un año sin fin (ej. "2022 –") significa que sigue vigente
    const experience = experienceData.map(({ company, role, year }) => ({
        title: company,
        subtitle: t(`roles.${role}`),
        year: year.endsWith('–') ? `${year} ${t('present')}` : year,
    }));

    const education = educationData.map(({ university, qualification, year }) => ({
        title: university,
        subtitle: t(`degrees.${qualification}`),
        year,
    }));

    return (
        <section className='pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>{t('about')}</h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
                    </div>
                    {/* tabs  */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[190px] xl:w-auto' value='personal'>{t('information')}</TabsTrigger>
                                <TabsTrigger className='w-[190px] xl:w-auto' value='qualifications'>{t('qualifications')}</TabsTrigger>
                                <TabsTrigger className='w-[190px] xl:w-auto' value='skills'>{t('skills')}</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className='pl-4 text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>{t('information-title')}</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>{t('information-description')}</p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => (
                                                <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                    <div className='text-primary'>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className="text-primary">{t('languages-title')}</div>
                                            <div className="border-b border-border"></div>
                                            <div>{t('languages')}</div>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>{t('my-path')}</h3>
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* experience  */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>{t('experience')}</h4>
                                                </div>
                                                <Timeline items={experience} />
                                            </div>
                                            {/* education  */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap />
                                                    <h4 className='capitalize font-medium'>{t('education')}</h4>
                                                </div>
                                                <Timeline items={education} />
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* skills */}
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8'>{t('what-I-use')}</h3>
                                        {/* skills por grupo  */}
                                        <div className='flex flex-col gap-y-8 mb-12'>
                                            {skillData.map(({ key, items }) => (
                                                <div key={key}>
                                                    <h4 className='text-xl font-semibold mb-2'>{t(`skill-groups.${key}`)}</h4>
                                                    <div className='border-b border-border mb-4'></div>
                                                    <ul className='flex flex-wrap gap-2 justify-center xl:justify-start'>
                                                        {items.map((item) => (
                                                            <li key={item} className='text-base font-medium px-3 py-1 rounded-md bg-tertiary dark:bg-secondary/40'>{item}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        {/* tools  */}
                                        <div>
                                            <h4 className='text-xl font-semibold mb-2 xl:text-left'>{t('tools')}</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            <div className='flex gap-x-8 justify-center xl:justify-start'>
                                                {toolsData.map(({ name, imgPath }) => (
                                                    <Image key={name} src={imgPath} width={48} height={48} alt={name} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
