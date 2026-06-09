export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/60 py-8 px-6 sm:px-10 bg-[#080d14]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <a href="https://github.com/Valritehachi" target="_blank" rel="noopener noreferrer"
             className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
             className="text-cyan-400 hover:text-cyan-300 text-sm transition-colors">LinkedIn</a>
          <a href="mailto:valritehavhi@gmail.com"
             className="text-orange-400 hover:text-orange-300 text-sm transition-colors">Email</a>
        </div>
        <p className="text-slate-600 text-xs">
          &copy; {year} Valrite Hamilton — QA Tester
        </p>
      </div>
    </footer>
  );
}
