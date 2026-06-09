export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 sm:px-10 lg:px-16 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 text-sm mb-10 max-w-xl">
          I&apos;m currently open to new opportunities. Whether you have a
          project in mind or just want to say hi — my inbox is always open.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="mailto:valritehavhi@gmail.com"
            className="text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200"
          >
            valritehavhi@gmail.com
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
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-fuchsia-400 text-sm transition-colors duration-200"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
