export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-10 lg:px-16 border-t border-slate-800/50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-sm mb-10 leading-relaxed">
          Whether you have a project in mind or a job position — my inbox is always open.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="mailto:valritehachi@gmail.com"
            className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200"
          >
            valritehachi@gmail.com
          </a>
          <a
            href="https://github.com/Valritehachi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/valrite-ehachi-a4714a397/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
