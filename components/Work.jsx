"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from '@/i18n/routing';
import { Button } from "@/components/ui/button";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/app/lib/data";
import { useTranslations } from "next-intl";

const Work = () => {
  const t = useTranslations('Works')
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text  */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start ">
          <h2 className="section-title mb-4 ">{t('last-projects')}</h2>
          <p className="subtitle mb-8">
            {t('last-projects-description')}
          </p>
          <Link href="/projects">
            <Button>{t('all-projects')}</Button>
          </Link>
        </div>
        {/* slider  */}
        <div className="xl:max-w-[1000px] xl:absolute pl-2 right-0 top-0 ">
          <Swiper
            className="h-[600px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides  */}
            {projectsData.slice(0, 4).map((project) => {
              return (
                <SwiperSlide key={project.id}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
