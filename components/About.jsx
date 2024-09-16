import DevImg from '@/components/DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react'

const infoDate = [
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

const qualificationData =[
    {
        title: 'education',
        data:[
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
        data:[
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
    const getData = (arr, title) =>{
        return arr.find((item)=> item.title === title);
    }
    console.log(getData(qualificationData, 'education'))
    return (
        <section>
            <div className='container mx-auto'>
                <h2 className='section-title'>Acerca de mi</h2>
            </div>
        </section>
    )
}

export default About