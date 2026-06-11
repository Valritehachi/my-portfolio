"use client";
import { useEffect, useRef } from "react";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("proj-visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  const openSite = () => {
    window.open(project.demo ?? project.github, "_blank");
  };

  return (
    <div
      className="flex flex-row py-12 cursor-pointer"
      style={{ borderBottom: "1px dotted rgba(255,255,255,0.25)" }}
      onClick={openSite}
    >
      {/* Preview panel (left ~55%) */}
      <div
        ref={leftRef}
        className="proj-animate-left flex-shrink-0"
        style={{ width: "55%", height: "300px" }}
      >
        <div
          className="w-full h-full flex flex-col overflow-hidden"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* Browser chrome bar */}
          <div
            className="flex items-center gap-1.5 px-3 flex-shrink-0"
            style={{ backgroundColor: "#111", height: "30px" }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 block" />
            <span
              className="flex-1 mx-2 flex items-center px-2 rounded"
              style={{ backgroundColor: "#222", height: "16px", color: "#666", fontSize: "9px" }}
            >
              {project.demo ?? project.github}
            </span>
          </div>
          {/* Screenshot preview — falls back to coloured bg if image fails */}
          <div
            className="flex-1 relative overflow-hidden"
            style={{ backgroundColor: project.previewBg }}
          >
            {project.demo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://s0.wp.com/mshots/v1/${encodeURIComponent(project.demo)}?w=800`}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-bold text-2xl text-center px-6" style={{ color: project.titleColor }}>
                  {project.title}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Text content (right ~45%) */}
      <div
        ref={rightRef}
        className="proj-animate-right"
        style={{ paddingLeft: "5%", paddingTop: "12px", width: "45%" }}
      >
        <p className="font-bold text-2xl mb-3" style={{ color: "#8eaf8e" }}>
          {project.title}
        </p>
        <p className="text-white mb-5 leading-relaxed" style={{ fontSize: "0.95em" }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-1"
              style={{ border: "1px solid #8eaf8e", color: "#8eaf8e" }}
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3" onClick={(e) => e.stopPropagation()}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-button"
            >
              View Demo
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-button"
          >
            View Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
