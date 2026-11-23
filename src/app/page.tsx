import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white grain">
      {/* Premium background */}
      <div className="spotlight" />

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />

        {/* HERO */}
        <Hero />

        {/* PROJECTS */}
        <Projects />

        {/* CERTIFICATIONS */}
        <section id="certifications" className="py-24 px-6">
          <div className="mx-auto w-full max-w-5xl">
           <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Awards &amp; Professional Development
               <div className="w-16 h-1 bg-yellow-400 mt-4 mb-10 rounded-full" />
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <div className="p-6 rounded-2xl border border-neutral-800 hover:border-yellow-500 transition md:col-span-2">
                <h3 className="text-xl font-semibold mb-2">Canada Life Award · RRC Polytech · June 2026</h3>
                  <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
                    Received the Canada Life Award at RRC Polytech’s Applied Computer Education Awards in June 2026.
                  </p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-800 hover:border-yellow-400 transition">
                <h3 className="text-xl font-semibold mb-2">AWS Academy Cloud Foundations</h3>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
                    Completed foundational cloud training covering AWS core services,
                    security, architecture, and deployment principles.
                  </p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-800 hover:border-yellow-500 transition">
                  <h3 className="text-xl font-semibold mb-2">Introduction to MongoDB </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
                    Gained practical knowledge of NoSQL data modeling, CRUD operations,
                    indexing, and performance optimization.
                  </p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-800 hover:border-yellow-500 transition">
                <h3 className="text-xl font-semibold mb-2">RRC Polytech Summer Bootcamp · 2026</h3>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
                  Built and tested AI agent workflows with n8n, explored machine learning in Google Colab,
                  and worked with Microsoft Fabric, PySpark, and Power BI for data analysis and reporting.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-neutral-800 hover:border-yellow-500 transition">
                <h3 className="text-xl font-semibold mb-2">WIPO Summer School on Intellectual Property</h3>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
                  Completed international program focused on intellectual property,
                  innovation, and global technology governance.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="pt-24 pb-12 px-6">
          <div className="mx-auto w-full max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">About</h2>
            <div className="w-16 h-1 bg-yellow-400 mt-4 mb-10 rounded-full" />

            <p className="text-neutral-400 text-lg leading-relaxed max-w-3xl">
              I’m a Winnipeg-based software developer and a 2026 graduate of RRC Polytech’s
              Application Development and Delivery program, where I earned a GPA of 4.13 out of 4.5.
              I enjoy building and testing APIs
              and tracing bugs across the front end and back end. During my industry project
              with MANFF, I also facilitated team meetings and demonstrated key workflows to
              the client. I’m open to relocation.
            </p>
          </div>
        </section>

        <section id="community" className="pt-12 pb-24 px-6">
          <div className="mx-auto w-full max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Community Involvement
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mt-4 mb-10 rounded-full" />
            <div className="p-6 rounded-2xl border border-neutral-800">
              <h3 className="text-xl font-semibold">Harvest Manitoba</h3>
              <p className="mt-2 text-neutral-400">Volunteer</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-28 py-32 px-6">
          <div className="mx-auto w-full max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Contact</h2>
            <div className="w-16 h-1 bg-yellow-400 mt-4 mb-10 rounded-full" />

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <p className="text-neutral-300 text-lg leading-relaxed">
                I’m open to software development roles and project collaborations.
                Get in touch by email or LinkedIn.
              </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
                href="mailto:nkechiecheta06@gmail.com"
                className="px-6 py-3 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/nkechiecheta/"
            target="_blank"
            className="px-6 py-3 rounded-full border border-white/15 text-white hover:bg-white/5 transition"
         >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-sm text-neutral-500 border-t border-neutral-800">
          © {new Date().getFullYear()} Nkechi Echeta. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
