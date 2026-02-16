import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-black text-white">

  <Navbar />

  {/* Hero */}
  <section id="top" className="min-h-screen flex items-center justify-center px-6">
    <Hero />
  </section>

  {/* Projects */}
  <section id="projects" className="py-28 px-6">
    <div className="max-w-6xl mx-auto">
      <Projects />
    </div>
  </section>

  {/* About */}
  <section id="about" className="py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">About</h2>
      <p className="text-neutral-400 leading-relaxed">
        I’m a Software Developer focused on building secure and scalable systems.
        I enjoy backend engineering, cloud architecture, and writing clean,
        maintainable code that lasts.
      </p>
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="py-28 px-6">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="text-neutral-400">
        Email: <span className="text-white">nkechiecheta06@gmail.com</span>
      </p>
    </div>
  </section>

  {/* Footer */}
  <footer className="py-12 px-6 border-t border-neutral-800">
    <div className="max-w-6xl mx-auto text-center text-neutral-500">
      <p>© {new Date().getFullYear()} Nkechi Echeta. All rights reserved.</p>
    </div>
  </footer>

</main>
  );
}
