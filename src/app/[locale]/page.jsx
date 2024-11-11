import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";
import {useTranslations} from 'next-intl';
import {Link} from '@/src/i18n/routing';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className='mx-2'>
      <div>
        <h1>{t('title')}</h1>
        <Link href="/projects">{t('about')}</Link>
      </div>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
