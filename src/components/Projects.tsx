import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <div id="projects" className="mt-16 mb-16">
      <h2
        className="text-4xl font-bold text-center mb-12"
        style={{ color: "#8eaf8e" }}
      >
        PROJECTS
      </h2>
      <div style={{ borderTop: "1px dotted rgba(255,255,255,0.25)" }}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://github.com/Valritehachi"
          target="_blank"
          rel="noopener noreferrer"
          className="proj-button"
        >
          View other Projects
        </a>
      </div>
    </div>
  );
}
