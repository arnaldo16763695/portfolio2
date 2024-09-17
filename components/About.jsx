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
                qualification: "Operador Soporte Técnico",
                year: '2005-2016'
            },
            {
                company: "Emprevet",
                qualification: "instructor CCNA",
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
        title: 'herramientas',
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
                                                <div  className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                    <div className='text-primary'>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>qualifications</TabsContent>
                                <TabsContent value='skills'>skills</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About