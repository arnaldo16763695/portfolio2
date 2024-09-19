'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/4.png',
        category: 'reac js',
        name: 'Sitio web de Movinet',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.',
        link: '',
        github: '',
    },
    {
        image: '/work/3.png',
        category: 'reac js',
        name: 'Sitio web de Colabry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.',
        link: '',
        github: '',
    },
    {
        image: '/work/2.png',
        category: 'reac js',
        name: 'Sitio web de Example',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.',
        link: '',
        github: '',
    },
    {
        image: '/work/1.png',
        category: 'reac js',
        name: 'Sitio web de Exmaple 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.',
        link: '',
        github: '',
    },
    {
        image: '/work/1.png',
        category: 'reac jfullstack',
        name: 'Sitio web de Exmaple 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta cum excepturi, totam magni dolorum a obcaecati architecto similique.',
        link: '',
        github: '',
    },
]

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className="container mx-auto">
                {/* text  */}
                <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start '>
                    <h2 className='section-title mb-4 '>Últimos proyectos</h2>
                    <p className='subtitle mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur exercitationem cupiditate dolore minus.</p>
                    <Link href='/projects'>
                        <Button>Todos los proyectos</Button>
                    </Link>
                </div>
                {/* slider  */}
                <div className='xl:max-w-[1000px] xl:absolute pl-10 right-0 top-0 '>
                    <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                        640: {
                            slidesPerView: 2
                        }
                    }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}>
                        {/* show only the first 4 projects for the slides  */}
                        {
                            projectData.slice(0, 4).map((project, index) => {
                                return <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Work