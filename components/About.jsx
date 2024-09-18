import DevImg from '@/components/DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react'

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Arnaldo Espinoza',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+58 0414 4786040',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'arnaldoespinoza1@hotmaial.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Nacido el 12 de abril de 1983',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Ingeniero de Sistema',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Venezuela, Punto Fijo, Falcón',
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                univerity: "Carlos Soublette",
                qualification: "TSU en Sistemas de Información",
                year: '2003-2006'
            },
            {
                univerity: "Carlos Soublette",
                qualification: "TSU en Sistemas de Información",
                year: '2003-2006'
            }
        ]

    },
    {
        title: 'experience',
        data: [
            {
                company: "Makro",
                role: "Operador Soporte Técnico",
                year: '2005-2016'
            },
            {
                company: "Emprevet",
                role: "instructor CCNA",
                year: '2014-2016'
            },

        ]

    },
]

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS'
            },
            {
                name: 'Desarrollo Front-end'
            },
            {
                name: 'Javascript, PHP'
            },
            {
                name: 'Desarrollo Back-end '
            }
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg'
            },
            {
                imgPath: '/about/figma.svg'
            },
            {
                imgPath: '/about/notion.svg'
            },
            {
                imgPath: '/about/wordpress.svg'
            },

        ]
    }
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }
    console.log(getData(qualificationData, 'education'))
    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>Acerca de mi</h2>
                <div className='flex flex-col xl:flex-row'>
                    {/* image */}
                    <div className='hidden xl:flex flex-1 relative'>
                        <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer.png' />
                    </div>
                    {/* tabs  */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[190px] xl:w-auto' value='personal'>Información</TabsTrigger>
                                <TabsTrigger className='w-[190px] xl:w-auto' value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger className='w-[190px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}

                                <TabsContent value='personal'>
                                    <div className='pl-4 text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Unmatched Service Quality for over 10 Years</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>Me especializo en crear sitios web intuitivos con tecnología de punta, brindando experiencias de usuario dinámicas y atractivas </p>
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
                                            <div className="text-primary">language skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>Spañol, Inglés</div>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* qualifications */}
                                <TabsContent value='qualifications'>
                                    <div>
                                        <h3 className='h3 mb-8 text-center xl:text-left'>My awesome journey</h3>
                                        <div className='grid md:grid-cols-2 gap-y-8'>
                                            {/* experience  */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <Briefcase />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                {/* list  */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'experience').data.map((item, index) => {
                                                        const { company, role, year } = item;
                                                        return (
                                                            <div className='flex gap-x-8 group ' key={index}>
                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>

                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold textxl leading-none mb-2'>{company}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                    <div className='text-base font-medium'>{year}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* education  */}
                                            <div className='flex flex-col gap-y-6'>
                                                <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                    <GraduationCap />
                                                    <h4 className='capitalize font-medium'>
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                {/* list  */}
                                                <div className='flex flex-col gap-y-8'>
                                                    {getData(qualificationData, 'education').data.map((item, index) => {
                                                        const { univerity, qualification, year } = item;
                                                        return (
                                                            <div className='flex gap-x-8 group ' key={index}>
                                                                <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'>

                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className='font-semibold textxl leading-none mb-2'>{univerity}</div>
                                                                    <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                    <div className='text-base font-medium'>{year}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </TabsContent>

                                {/* skills */}
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8'>
                                            Lo que uso todos los días
                                        </h3>
                                        {/* skills  */}

                                        <div className='mb-16'>
                                            <h4 className='text-xl font-semibold mb-2'>
                                                Habilidades
                                            </h4>
                                            <div className='border-b border-border mb-4'>

                                            </div>
                                            {/* skill list  */}
                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index) => {
                                                    const { name } = item
                                                    return (
                                                        <div key={index} className='w-2/4 text-center xl:text-left mx-auto'>
                                                            <div className='font-medium'>{name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        {/* tools  */}
                                        <div><h4 className='text-xl font-semibold mb-2 xl:text-left'>Herramientas</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            {/* tool list  */}
                                            <div className='flex gap-x-8 justify-center xl:justify-start'>
                                                {
                                                    getData(skillData, 'tools').data.map((item, index) => {
                                                        const { imgPath } = item
                                                        return (
                                                            <div key={index}>
                                                                <Image src={imgPath} width={48} height={48} alt='' priority />
                                                            </div>
                                                        )


                                                    })
                                                }
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