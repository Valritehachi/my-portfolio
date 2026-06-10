import Link from "next/link";

const stats = [
  { value: "250+", label: "TEST CASES", color: "text-emerald-400", border: "border-l-emerald-500", bg: "bg-emerald-950/40" },
  { value: "95%",  label: "COVERAGE",   color: "text-blue-400",    border: "border-l-blue-500",    bg: "bg-blue-950/40"   },
  { value: "60%",  label: "FASTER",     color: "text-orange-400",  border: "border-l-orange-500",  bg: "bg-orange-950/40" },
  { value: "3+",   label: "YRS EXP",    color: "text-purple-400",  border: "border-l-purple-500",  bg: "bg-purple-950/40" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24 overflow-hidden">

      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="blob absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="blob-delay absolute top-1/2 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="blob-delay-2 absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl">
        {/* Terminal prompt */}
        <p className="text-emerald-400 text-sm tracking-widest mb-5 animate-fade-in">
          &gt; VALRITE HAMILTON
        </p>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
          QA Automation<br />
          <span className="cursor text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">
            Engineer
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
          Building intelligent testing platforms with Claude AI.&nbsp;
          250+ test cases &bull; 95% coverage &bull; 60% faster validation.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          <Link
            href="/projects"
            className="px-7 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold text-sm transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-400/40"
          >
            See Projects
          </Link>
          <a
            href="https://github.com/Valritehachi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-emerald-500/60 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 font-bold text-sm transition-all duration-200"
          >
            GitHub →
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`${s.bg} border border-slate-800 border-l-2 ${s.border} p-5 flex flex-col gap-2 hover:border-slate-700 transition-colors duration-200`}
            >
              <span className={`text-4xl font-bold ${s.color}`}>{s.value}</span>
              <span className="text-slate-500 text-xs tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a
          href="#projects"
          className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-200 animate-bounce"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
