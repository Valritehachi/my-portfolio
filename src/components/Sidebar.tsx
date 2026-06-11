"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-4 z-[60] md:hidden flex flex-col gap-1.5 p-2 rounded bg-black/60"
        aria-label="Toggle menu"
      >
        <span className={`block w-7 h-0.5 bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-3 h-0.5 bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-0 left-0 h-full z-50 flex flex-col transition-transform duration-300
          w-4/5 md:w-[25%]
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        style={{ backgroundColor: "hsla(120, 70%, 14%, 0.98)", padding: "5% 3%" }}
      >
        {/* Profile photo placeholder — replaced with real photo later */}
        <div className="flex justify-center mb-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl"
            style={{ backgroundColor: "#0a1a0d", color: "#8eaf8e", border: "2px solid #8eaf8e" }}
          >
            VH
          </div>
        </div>

        {/* Name & title */}
        <div className="text-center mb-4">
          <p className="text-white font-bold text-base tracking-wider m-0">
            VALRITE HAMILTON
          </p>
          <p className="text-sm font-semibold mt-1 m-0" style={{ color: "#8eaf8e" }}>
            QA Automation Engineer
          </p>
        </div>

        {/* Nav links */}
        <nav style={{ marginTop: "10%" }}>
          <ul className="list-none p-0 m-0 font-bold text-2xl">
            {links.map(({ href, label }) => (
              <li key={href} className="pb-4">
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition-colors duration-200"
                  style={{ color: "#8eaf8e", textDecoration: "none" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social icons */}
        <div className="mt-16 pt-4 flex gap-5">
          <a
            href="mailto:valritehachi@gmail.com"
            className="hover:text-white transition-colors duration-200"
            style={{ color: "#8eaf8e" }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>
          <a
            href="https://github.com/Valritehachi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            style={{ color: "#8eaf8e" }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/valrite-ehachi-a4714a397/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            style={{ color: "#8eaf8e" }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </aside>
    </>
  );
}
