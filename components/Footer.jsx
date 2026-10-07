import Socials from "@/components/Socials";
import { useTranslations } from "next-intl";
import { contactData } from "@/app/lib/data";

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
       <div className='flex flex-col items-center justify-between gap-y-4 text-center'>
         {/* socials  */}
         <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all duration-300' />
         {/* datos del negocio (firma personal)  */}
         <div className='flex flex-col gap-y-1 text-sm text-white/70'>
           <div className='font-semibold text-white/90 tracking-wide'>{contactData.legalName}</div>
           <div>RIF: {contactData.rif}</div>
           <div>{contactData.location}</div>
           <div className='flex flex-wrap justify-center gap-x-3'>
             <a href={`mailto:${contactData.email}`} className='hover:text-primary transition-all'>{contactData.email}</a>
             <span aria-hidden='true'>·</span>
             <a href={contactData.phoneHref} className='hover:text-primary transition-all'>{contactData.phone}</a>
           </div>
         </div>
         {/* copyright  */}
         <div className='text-muted-foreground text-sm'>
           Copyright &copy; {new Date().getFullYear()} {contactData.legalName} · ajedev. {t('rights')}
         </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
