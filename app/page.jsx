import About from "@/components/About";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Work from "@/components/Work";


export default function Home() {
  return (
    <main className='mx-2'>
      <Hero />
      <About />
      <Services />
      <Work />
      <Reviews />
    </main>
  );
}
