export default function Hero() {
  return (
    <section id="home" className="py-24 px-6">
      <div className="mx-auto w-full max-w-6xl pt-28 pb-16">
        <div className="mx-auto w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <p className="text-sm text-neutral-400">
              Software Developer • Cloud • Secure Coding
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-yellow-400">Nkechi Echeta</span>
              <span className="text-white/80">.</span>
            </h1>

            <p className="mt-5 text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
              Software Developer building clean, scalable, and secure applications with modern technologies.
              I design APIs, work with cloud services, and ship reliable software that’s easy to maintain.
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
                href="/resume.pdf"
                className="px-6 py-3 rounded-full border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4 text-neutral-300">
              <a
                href="https://github.com/"
                target="_blank"
                className="hover:text-yellow-400 transition"
                aria-label="GitHub"
              >
                <IconGithub />
              </a>
              <a
                href="https://www.linkedin.com/"
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

          {/* RIGHT */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-6 bg-yellow-400/10 blur-3xl rounded-[40px]" />

            {/* Card */}
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="text-sm text-neutral-400">Currently building</div>
                <div className="flex gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/25" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-sm text-neutral-400">Focus</p>
                  <p className="mt-1 font-semibold">
                    APIs • Cloud • Security
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-sm text-neutral-400">Tech Stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["TypeScript", "Node.js", "AWS", "Python", "SQL"].map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-sm text-neutral-400">What you get</p>
                  <ul className="mt-2 space-y-2 text-sm text-neutral-300">
                    <li className="flex gap-2">
                      <span className="text-yellow-400">✓</span> Clean, readable code
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-400">✓</span> Strong security mindset
                    </li>
                    <li className="flex gap-2">
                      <span className="text-yellow-400">✓</span> Reliable delivery & testing
                    </li>
                  </ul>
                </div>
              </div>

              {/* Subtle grid lines */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
            </div>
          </div>
        </div>
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
