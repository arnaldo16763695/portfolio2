"use client";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { projectData } from "@/app/lib/data";
import { TabsContent } from "@radix-ui/react-tabs";
import { useTranslations } from "next-intl";




const ProjectPage = () => {
  const t = useTranslations('Works')
  const projectData = [
    {
      image: "/work/4.png",
      category: "react js",
      name: "Sitio web de Movinet",
      description: t('work-description1'),
      link: "",
      github: "",
    },
    {
      image: "/work/3.png",
      category: "react js",
      name: "Sitio web de Colabry",
      description:  t('work-description2'),
      link: "",
      github: "",
    },
    {
      image: "/work/2.png",
      category: "react js",
      name: "Sitio web de Example",
      description: t('work-description3'),        
      link: "",
      github: "",
    },
    {
      image: "/work/1.png",
      category: "react js",
      name: "Sitio web de Exmaple 2",
      description: t('work-description4'),       
      link: "",
      github: "",
    },
    {
      image: "/work/1.png",
      category: "react fullstack",
      name: "Sitio web ejemplo",
      description: t('work-description5'),       
      link: "",
      github: "",
    },
  ];
  const uniqueCategories = [
    "all projects",
    ...new Set(projectData.map((item) => item.category)),
  ];
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  // if category is 'all projects' return all projects, else filter by category
  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  console.log(filteredProjects);
  // console.log(category);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs  */}

        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]">
            {categories.map((category, index) => (
              <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectPage;
