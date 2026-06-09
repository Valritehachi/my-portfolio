"use client";

import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const destination = project.demo ?? project.github;

  function openSite() {
    window.open(destination, "_blank", "noopener,noreferrer");
  }

  return (
    <article
      onClick={openSite}
      className="border border-slate-800 hover:border-slate-500 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
    >
      {/* Preview area */}
      <div className={`relative w-full aspect-video ${project.previewBg} overflow-hidden flex flex-col`}>

        {project.codePreview ? (
          <div className="w-full h-full p-5 flex flex-col justify-center">
            {project.codePreview.map((line, i) => (
              <p
                key={i}
                className={`text-xs leading-relaxed ${
                  line.startsWith("$")
                    ? "text-emerald-400 font-bold"
                    : line === ""
                    ? "mt-0.5"
                    : (project.codeColor ?? "text-slate-300")
                }`}
              >
                {line || " "}
              </p>
            ))}
          </div>
        ) : (
          <>
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 shrink-0 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-sm px-2 py-0.5 text-xs text-slate-500 truncate border border-slate-200">
                {project.demo
                  ? project.demo.replace("https://", "")
                  : project.github.replace("https://github.com/", "github.com/")}
              </div>
            </div>

            {/* Faded title watermark */}
            <div className="flex-1 flex items-center justify-center px-6">
              <p className="text-slate-200 font-bold text-3xl sm:text-4xl text-center leading-tight select-none">
                {project.title}
              </p>
            </div>
          </>
        )}

        {project.demo && (
          <span className="absolute bottom-3 right-3 px-3 py-1 bg-emerald-500 text-white text-xs font-bold tracking-wider">
            DEMO
          </span>
        )}
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col gap-3 bg-[#0d1117]">
        <h3 className={`font-bold text-lg ${project.titleColor}`}>
          {project.title}
        </h3>

        <p className="text-slate-300 text-xs leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span key={tag} className="px-2 py-0.5 border border-slate-600 text-slate-300 text-xs">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
          <span
            onClick={(e) => { e.stopPropagation(); window.open(project.github, "_blank", "noopener,noreferrer"); }}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            source
          </span>
          {project.demo && (
            <span className="text-slate-500 text-xs">click to open ↗</span>
          )}
        </div>
      </div>
    </article>
  );
}
