import { Github, Link2Icon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const iconLinkStyles = 'bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center md:scale-0 md:opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200';

const ProjectCard = ({ project }) => {
    const t = useTranslations('Projects');

    return (
        <Card className='group overflow-hidden relative h-full'>
            <CardHeader className='p-0'>
                {/* image  */}
                <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:bg-[110%] xl:dark:bg-work_project_bg_dark xl:bg-no-repeat overflow-hidden'>
                    <Image src={project.image} alt={project.name} width={250} height={250} className='rounded-lg shadow-2xl' />
                    {/* btns: solo si el proyecto tiene enlace o repo público */}
                    <div className='absolute flex gap-4 justify-center items-center'>
                        {project.link && (
                            <a href={project.link} target='_blank' rel='noopener noreferrer' aria-label={t('visit-site')} className={iconLinkStyles}>
                                <Link2Icon className='text-white' />
                            </a>
                        )}
                        {project.github && (
                            <a href={project.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub' className={iconLinkStyles}>
                                <Github className='text-white' />
                            </a>
                        )}
                    </div>
                </div>
            </CardHeader>
            <div className='h-full px-8 py-6'>
                <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>{t(`categories.${project.category}`)}</Badge>
                <h4 className='h4 mb-1'>{project.name}</h4>
                <p className='text-muted-foreground text-lg mb-4'>{t(`items.${project.id}`)}</p>
                {/* tecnologías  */}
                <ul className='flex flex-wrap gap-2'>
                    {project.tech.map((tech) => (
                        <li key={tech} className='text-xs font-medium px-2 py-1 rounded-md bg-tertiary dark:bg-secondary/40'>{tech}</li>
                    ))}
                </ul>
            </div>
        </Card>
    )
}

export default ProjectCard
