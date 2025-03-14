'use client'
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useTranslations } from 'next-intl';

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: 'Jesús Rodriguez',
        job: 'Chef',
        review: 'Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis nihil delectus molestias, asperiores, corrupti incidunt iure.'
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: 'Ricardo Pérez',
        job: 'Chef',
        review: 'Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis nihil delectus molestias, asperiores, corrupti incidunt iure.'
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: 'Ignacio da Silva',
        job: 'Architech',
        review: 'Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis nihil delectus molestias, asperiores, corrupti incidunt iure.'
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: 'Jesús Ratia',
        job: 'Ingeniero',
        review: 'Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis nihil delectus molestias, asperiores, corrupti incidunt iure.'
    },
    {
        avatar: '/reviews/avatar-5.png',
        name: 'Carlos Zuarez',
        job: 'Mecanico',
        review: 'Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis nihil delectus molestias, asperiores, corrupti incidunt iure.'
    },
    {
        avatar: '/reviews/avatar-6.png',
        name: 'Douglas Atacho',
        job: 'Electricista',
        review: 'Reviews Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reiciendis nihil delectus molestias, asperiores, corrupti incidunt iure.'
    },
]

const Reviews = () => {
    const t = useTranslations('Reviews')
    
    return (
        <section className='mb-12 xl:mb-32'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 text-center mx-auto'>{t('reviews-title')}</h2>
                {/* slider  */}
                <Swiper slidesPerView={1} breakpoints={{
                    640: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                }} spaceBetween={30} modules={[Pagination]} pagination={{ clickable: true }}
                    className='h-[350px]'
                >
                    {
                        reviewsData.map((person, index) => {
                            return <SwiperSlide key={index}>
                                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                    <CardHeader className='p-0 mb-10'>
                                        <div className='flex items-center gap-x-4'>
                                            {/* image  */}
                                            <Image src={person.avatar} alt='person image' width={70} height={70} priority />
                                        </div>
                                        {/* name  */}
                                        <div className='flex flex-col'>
                                            <CardTitle>{person.name}</CardTitle>
                                            <p>
                                                {person.job}
                                            </p>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>
                                        {person.review}
                                    </CardDescription>
                                </Card>

                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews