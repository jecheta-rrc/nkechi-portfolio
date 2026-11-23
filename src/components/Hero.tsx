import { projects } from "@/data/projects";

export default function Hero() {
  const featuredProject = projects[0];

  return (
    <section id="home" className="relative overflow-hidden px-6 pb-16 pt-32 sm:pt-40 lg:pb-24 lg:pt-44">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold tracking-[0.14em] text-yellow-300 uppercase">
            Software developer · Winnipeg
          </p>

          <h1 className="mt-5 text-[clamp(3.5rem,9vw,7rem)] leading-[0.92] tracking-[-0.065em]">
            <span className="block font-light">Nkechi</span>
            <span className="block font-bold text-yellow-400">Echeta<span aria-hidden="true">.</span></span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-300">
            I build full-stack web applications with React, TypeScript, and Node.js.
            My recent work includes emergency reporting and volunteer onboarding
            for a First Nations client project.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition"
            >
              Contact Me
            </a>

            <a
              href="/Nkechi-Echeta-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center gap-4 text-neutral-300">
            <a
              href="https://github.com/jecheta-rrc"
              target="_blank"
              className="hover:text-yellow-400 transition"
              aria-label="GitHub"
            >
              <IconGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/nkechiecheta/"
              target="_blank"
              className="hover:text-yellow-400 transition"
              aria-label="LinkedIn"
            >
              <IconLinkedIn />
            </a>
            <a
              href="mailto:nkechiecheta06@gmail.com"
              className="hover:text-yellow-400 transition"
              aria-label="Email"
            >
              <IconMail />
            </a>
          </div>
        </div>

        <article className="relative isolate overflow-hidden rounded-[2rem] border border-yellow-200/20 bg-[#131007] shadow-[0_14px_45px_-22px_#facc1533]">
          <div
            aria-hidden="true"
            className="relative h-40 overflow-hidden border-b border-yellow-200/15 bg-[radial-gradient(ellipse_at_72%_35%,#634817_0%,#2e2208_45%,#141005_85%)] sm:h-52"
          >
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#d8a94a66_1px,transparent_1px),linear-gradient(to_bottom,#d8a94a66_1px,transparent_1px)] [background-size:28px_28px]" />
            <div className="absolute top-1/2 left-[70%] size-32 -translate-1/2 rounded-full border border-yellow-100/60 bg-yellow-400/8 shadow-[0_0_32px_#e8ab3950] sm:size-40" />
            <div className="absolute top-1/2 left-[70%] size-52 -translate-1/2 rounded-full border border-yellow-100/30 sm:size-64" />
            <div className="absolute top-1/2 left-[70%] size-72 -translate-1/2 rounded-full border border-yellow-100/15 sm:size-88" />
          </div>
          <div className="p-6 sm:p-8">
            <p className="text-sm font-semibold text-yellow-300">Software Developer · RRC Polytech Industry Project</p>
            <h2 className="mt-2 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
              {featuredProject.title}
            </h2>
            <p className="mt-3 text-neutral-300">
              As a primary developer, I built features for emergency reporting
              and volunteer onboarding, refactored TypeScript components, and
              wrote developer documentation. I demonstrated the Citizens
              Check-In and Volunteer workflows to MANFF.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-sm text-yellow-100" aria-label="Project technologies">
              {featuredProject.tech.slice(0, 3).map((technology) => (
                <li key={technology} className="rounded-full border border-yellow-200/20 px-3 py-1">
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

/* Inline icons (no packages needed) */
function IconGithub() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.89.5 12.35c0 5.15 3.29 9.52 7.86 11.06.58.11.79-.26.79-.57v-2.2c-3.2.71-3.88-1.59-3.88-1.59-.52-1.38-1.27-1.74-1.27-1.74-1.04-.73.08-.72.08-.72 1.15.08 1.75 1.22 1.75 1.22 1.02 1.8 2.68 1.28 3.33.98.1-.76.4-1.28.73-1.58-2.55-.3-5.23-1.32-5.23-5.9 0-1.3.45-2.36 1.2-3.2-.12-.3-.52-1.52.12-3.17 0 0 .98-.32 3.2 1.22.93-.27 1.92-.4 2.9-.4.99 0 1.98.13 2.9.4 2.22-1.54 3.2-1.22 3.2-1.22.64 1.65.24 2.87.12 3.17.75.84 1.2 1.9 1.2 3.2 0 4.59-2.69 5.6-5.25 5.89.41.37.78 1.09.78 2.2v3.26c0 .31.2.68.8.57 4.56-1.54 7.85-5.9 7.85-11.06C23.5 5.89 18.27.5 12 .5z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.6c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.7H9.32V9h3.42v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM3.56 20.45h3.56V9H3.56v11.45z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}
