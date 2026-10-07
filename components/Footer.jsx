import Socials from "@/components/Socials";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
       <div className='flex flex-col items-center justify-between'>
         {/* socials  */}
         <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 mb-4' iconsStyles='text-primary dark:text-white/70 text-[20px] hover:text-white dark:hover:text-primary transition-all duration-300' />
         {/* copyright  */}
         <div className='text-muted-foreground text-center'>
           Copyright &copy; {new Date().getFullYear()} Arnaldo Espinoza · ajedev. {t('rights')}
         </div>
       </div>
      </div>
    </footer>
  );
};

export default Footer;
