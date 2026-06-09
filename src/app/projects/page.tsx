import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects — Valrite Hamilton | QA Tester",
  description: "Testing projects and automation platforms by Valrite Hamilton.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-400 text-sm transition-colors duration-200 mb-12"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          cd ..
        </Link>

        <p className="text-emerald-400 text-xs tracking-widest mb-3">&gt; ls ./projects</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          All Projects
        </h1>
        <p className="text-slate-400 text-sm max-w-xl mb-14">
          Everything I&apos;ve built — from quick experiments to full production applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
