"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects, type Project } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  const activeIndex = useMemo(() => {
    if (!active) return -1;
    return projects.findIndex((p) => p.title === active.title);
  }, [active]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  // ESC to close
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center">
          Projects
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-yellow-400" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={() => setActive(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden={false}
          >
            {/* Overlay */}
            <motion.button
              className="absolute inset-0 bg-black/70"
              onClick={() => setActive(null)}
              aria-label="Close project modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-black/90 p-6 md:p-8 shadow-2xl backdrop-blur-xl"
              initial={{ y: 20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold">
                    {active.title}
                  </h3>
                  <p className="mt-2 text-neutral-300">{active.description}</p>
                </div>

                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-white/15 px-3 py-1 text-sm text-neutral-200 hover:border-white/30 hover:bg-white/5 transition"
                >
                  Close ✕
                </button>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-neutral-300 leading-relaxed">
                  {active.longDescription}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs rounded-full border border-white/10 px-3 py-1 text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold text-neutral-200">
                  Highlights
                </p>
                <ul className="mt-3 space-y-2 text-neutral-300">
                  {active.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-yellow-400">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={active.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-yellow-400 px-5 py-2 text-black font-medium hover:bg-yellow-300 transition"
                >
                  View on GitHub →
                </a>

                {active.liveUrl && (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-5 py-2 text-white hover:border-white/30 hover:bg-white/5 transition"
                  >
                    Live Demo →
                  </a>
                )}
              </div>

              <div className="mt-6 text-xs text-neutral-500">
                Tip: Press <span className="text-neutral-300">ESC</span> to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

