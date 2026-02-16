import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [first, second, third, ...rest] = projects;

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Projects
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4" />
        </h2>

        {/* Bento grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {first && (
            <ProjectCard
              project={first}
              className="md:col-span-2"
              featured
            />
          )}

          {second && <ProjectCard project={second} className="" />}
          {third && <ProjectCard project={third} className="" />}

          {/* remaining projects (if any) */}
          {rest?.map((p) => (
            <ProjectCard key={p.title} project={p} className="md:col-span-1" />
          ))}
        </div>
      </div>
    </section>
  );
}
