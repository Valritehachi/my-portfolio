const stack = [
  {
    label: "TEST AUTOMATION",
    color: "text-emerald-400",
    items: ["Playwright", "Selenium", "PyTest", "Cypress"],
  },
  {
    label: "LANGUAGES",
    color: "text-cyan-400",
    items: ["TypeScript", "Python", "JavaScript"],
  },
  {
    label: "CLOUD & DEVOPS",
    color: "text-orange-400",
    items: ["AWS Lambda", "Docker", "GitHub Actions", "CI/CD"],
  },
  {
    label: "AI & PLATFORM",
    color: "text-purple-400",
    items: ["Claude API", "Prompt Engineering", "Next.js", "Node.js"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 sm:px-10 lg:px-16 border-t border-slate-800/50 bg-[#080d14]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Tech Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
          {stack.map((category) => (
            <div key={category.label}>
              <p className={`text-xs font-semibold tracking-widest mb-3 ${category.color}`}>
                {category.label}
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                {category.items.join(" • ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
