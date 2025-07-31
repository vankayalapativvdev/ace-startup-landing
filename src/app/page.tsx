import { Hero } from "@/components/Hero";
import { HeroImage } from "@/components/heroImage";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-6">
        <Navbar />
        <Hero />
        <HeroImage />
      </section>
    </>
  );
}
