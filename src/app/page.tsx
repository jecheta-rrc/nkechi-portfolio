import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-32">
      <Hero />
      </div>
      <Projects />
    </>
  );
}
