"use client";

import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className="text-left rounded-3xl border border-white/10 bg-white/[0.03] p-6 hover:border-white/20 hover:bg-white/[0.05] transition shadow-lg"
    >
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="mt-3 text-neutral-400 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="text-xs rounded-full border border-white/10 px-3 py-1 text-neutral-200"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 text-yellow-400 text-sm font-medium">
        View details →
      </div>
    </button>
  );
}

