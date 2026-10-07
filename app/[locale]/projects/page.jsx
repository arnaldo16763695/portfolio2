"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectsData, projectCategories } from "@/app/lib/data";
import { useTranslations } from "next-intl";

const ALL = "all";

const ProjectPage = () => {
  const t = useTranslations('Projects')
  const [category, setCategory] = useState(ALL);
  const categories = [ALL, ...projectCategories];

  // si la categoría es 'all' se muestran todos, si no se filtra por categoría
  const filteredProjects = category === ALL
    ? projectsData
    : projectsData.filter((project) => project.category === category);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          {t('title')}
        </h2>
        {/* tabs  */}
        <Tabs value={category} onValueChange={setCategory} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((item) => (
              <TabsTrigger
                value={item}
                key={item}
                className="capitalize w-[162px] md:w-auto"
              >
                {t(`categories.${item}`)}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* proyectos filtrados  */}
          <div className="text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectPage;
