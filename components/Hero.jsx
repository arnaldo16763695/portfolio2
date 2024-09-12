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
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Breve descripcion mia, soy un apasionado por la tecnologia de la información</p>

            {/* button  */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12 ">
              <Link href='/contact'><Button className="gap-x-2 " >Contáctame <Send size={18} /></Button></Link>
            <Button className="gap-x-2" variant='secondary' >Descargar CV <Download size={18} /></Button>
            </div>
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">
            image
          </div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero