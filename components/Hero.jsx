import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownLine,
  RiArrowDownSLine
} from 'react-icons/ri'
import DevImg from '@/components/DevImg';
import Badge from '@/components/Badge';
import Socials from '@/components/Socials';

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className='container mx-auto'>
        <div className="flex justify-between gap-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Desarrollador Web</div>
            <h1 className="h1 mb-4">Hola, soy Arnaldo Espinoza</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Soy un apasionado por la tecnología de la información. Me gusta aprender y enseñar.</p>

            {/* button  */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 ">
              <Link href='/contact'><Button className="gap-x-2 " >Contáctame <Send size={18} /></Button></Link>
              <Button className="gap-x-2" variant='secondary' >Descargar CV <Download size={18} /></Button>
            </div>

            {/* socials media */}
            <Socials iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' containerStyles='flex gap-x-6 mx-auto xl:mx-0' className='' />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">

            {/* badge 1 */}
            <Badge icon={<RiBriefcase4Fill />} endCountNum={3} badgeText={'Años de experiencia'} containerStyles='absolute top-[24%] -left-[5rem]' />
            
            {/* badge 2*/}
            <Badge icon={<RiTodoFill />} endCountNum={6} endCountText={''} badgeText={'Proyectos terminados'} containerStyles='absolute top-[80%] -left-[1rem]' />
           
            {/* badge 3*/}
            <Badge icon={<RiTeamFill />} endCountNum={6} endCountText={''} badgeText={'Clientes contentos'} containerStyles='absolute top-[55%] -right-8' />


            <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark
             h-[500px] w-[500px] bg-no-repeat absolute -top-1 -right-2'>
            </div>
            <DevImg imgSrc='/hero/developer.png' containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom" />
          </div>
        </div>
        {/* icon */}
        <div className="hidden xl:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero