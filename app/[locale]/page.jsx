import About from "@/components/About";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";

export default function Home() {
  return (
    <main className='mx-2'>
      <Hero />
      <About />
      <Services />
      <Work />
      {/* Reviews oculto hasta tener testimonios reales */}
      <Cta />
    </main>
  );
}
