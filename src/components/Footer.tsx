export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-700 py-10 px-6 sm:px-10 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-blue-950/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-emerald-400 text-sm font-bold tracking-wider">&gt; VALRITE HAMILTON</span>
          <span className="text-slate-500 text-xs">QA Automation Engineer</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://github.com/Valritehachi" target="_blank" rel="noopener noreferrer"
             className="text-slate-300 hover:text-emerald-400 text-sm font-medium transition-colors duration-200">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
             className="text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors duration-200">
            LinkedIn
          </a>
          <a href="mailto:valritehavhi@gmail.com"
             className="text-slate-300 hover:text-orange-400 text-sm font-medium transition-colors duration-200">
            Email
          </a>
        </div>

        <p className="text-slate-500 text-xs">&copy; {year} Valrite Hamilton</p>
      </div>
    </footer>
  );
}
