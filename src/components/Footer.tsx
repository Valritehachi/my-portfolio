export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 py-10 px-6 sm:px-10 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-slate-900 text-sm font-bold tracking-wider">VALRITE HAMILTON</span>
          <span className="text-slate-500 text-xs">QA Automation Engineer</span>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://github.com/Valritehachi" target="_blank" rel="noopener noreferrer"
             className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
             className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200">
            LinkedIn
          </a>
          <a href="mailto:valritehachi@gmail.com"
             className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors duration-200">
            Email
          </a>
        </div>

        <p className="text-slate-400 text-xs">&copy; {year} Valrite Hamilton</p>
      </div>
    </footer>
  );
}
