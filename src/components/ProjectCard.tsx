import { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="border border-neutral-800 rounded-xl p-6 hover:border-yellow-500 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

      <p className="text-neutral-400 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((item) => (
          <span
            key={item}
            className="text-sm border border-neutral-700 px-3 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        className="text-yellow-500 hover:underline"
      >
        View on GitHub →
      </a>
    </div>
  );
}
