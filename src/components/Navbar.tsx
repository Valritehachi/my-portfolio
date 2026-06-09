"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/90 backdrop-blur-md border-b border-slate-800/60">
      <nav className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-emerald-400 text-sm font-medium tracking-wider hover:text-emerald-300 transition-colors">
            &gt; valrite.dev
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: "home",     href: "/"         },
              { label: "projects", href: "/projects" },
              { label: "contact",  href: "/#contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-slate-400 hover:text-emerald-400 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-800 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">home</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">projects</Link>
            <Link href="/#contact" onClick={() => setOpen(false)} className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
