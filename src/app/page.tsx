import { Companies } from "@/components/Companies";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-8 py-6">
        <Navbar />
        <Hero />
        <Companies />
      </section>
    </>
  );
}
