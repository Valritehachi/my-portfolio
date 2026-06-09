import Link from "next/link";

const stats = [
  { value: "250+", label: "TEST CASES",  color: "text-emerald-400", border: "border-emerald-900/60", bg: "bg-emerald-950/40" },
  { value: "95%",  label: "COVERAGE",    color: "text-blue-400",    border: "border-blue-900/60",    bg: "bg-blue-950/40"   },
  { value: "60%",  label: "FASTER",      color: "text-orange-400",  border: "border-orange-900/60",  bg: "bg-orange-950/40" },
  { value: "3+",   label: "YRS EXP",     color: "text-purple-400",  border: "border-purple-900/60",  bg: "bg-purple-950/40" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-24">
      {/* Terminal prompt */}
      <p className="text-emerald-400 text-sm tracking-widest mb-5 animate-fade-in">
        &gt; VALRITE HAMILTON
      </p>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none mb-6">
        QA<br />
        <span className="cursor">Tester</span>
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
          className="px-7 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-900 font-bold text-sm transition-colors duration-200"
        >
          See Projects
        </Link>
        <a
          href="https://github.com/Valritehachi"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 font-bold text-sm transition-all duration-200"
        >
          GitHub →
        </a>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`${s.bg} border ${s.border} p-5 flex flex-col gap-2`}
          >
            <span className={`text-4xl font-bold ${s.color}`}>{s.value}</span>
            <span className="text-slate-500 text-xs tracking-widest">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="mt-20 flex justify-center sm:justify-start">
        <a
          href="#projects"
          className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-200 animate-bounce"
          aria-label="Scroll down"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
