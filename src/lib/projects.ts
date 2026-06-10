export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  previewBg: string;
  titleColor: string;
  accentBar: string;      // colored top strip on the card
  accentGlow: string;     // hover shadow color
  codePreview?: string[];
  codeColor?: string;
}

export const projects: Project[] = [
  {
    title: "Virtual QA Platform",
    description:
      "Cloud-based testing platform that accelerates QA workflows by supporting both no-code and automated testing. Used Claude API to auto-generate 500+ test cases from plain-language descriptions. Executed 200+ tests concurrently on AWS Lambda with real-time monitoring, screenshot capture, and log streaming. Reduced manual test creation time by 75% for non-technical testers.",
    tech: ["Next.js", "React", "TypeScript", "Playwright", "AWS Lambda", "Claude API"],
    github: "https://github.com/Valritehachi/virtual-qa",
    demo: "https://virtual-qa.vercel.app",
    previewBg: "bg-white",
    titleColor: "text-emerald-400",
    accentBar: "bg-emerald-500",
    accentGlow: "hover:shadow-emerald-500/20",
  },
  {
    title: "Best AI Jobs",
    description:
      "A directory of AI-powered income opportunities — from annotation and transcription to coding. Includes a quiz tool to match users with the right remote work based on their skills and hourly rate goals.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/ai_income_guide",
    demo: "https://www.bestaijobs.net/",
    previewBg: "bg-white",
    titleColor: "text-blue-400",
    accentBar: "bg-blue-500",
    accentGlow: "hover:shadow-blue-500/20",
  },
  {
    title: "Mr Futon Furniture",
    description:
      "Full e-commerce storefront for a Florida-based furniture retailer specializing in domestically-manufactured futon sofa sleepers. Features a product catalog, local delivery info, and a blog.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/mr_futon_furniture",
    demo: "https://www.mrfutonfurniture.com/",
    previewBg: "bg-white",
    titleColor: "text-orange-400",
    accentBar: "bg-orange-500",
    accentGlow: "hover:shadow-orange-500/20",
  },
  {
    title: "Paragon Federal Strategies",
    description:
      "Corporate website for a federal compliance and governance firm. Showcases services including PBM oversight, real-time claims monitoring, audit readiness, and federal contract management.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/paragon_site",
    demo: "https://www.paragonfederalstrategiescorp.com/",
    previewBg: "bg-white",
    titleColor: "text-purple-400",
    accentBar: "bg-purple-500",
    accentGlow: "hover:shadow-purple-500/20",
  },
  {
    title: "Salary Calculator",
    description:
      "A comprehensive suite of salary tools — calculate after-tax take-home pay, convert salary to hourly, compare job offers, and analyze cost-of-living differences across U.S. cities.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/salary-calculator",
    demo: "https://www.salary-calculate.com/",
    previewBg: "bg-white",
    titleColor: "text-rose-400",
    accentBar: "bg-rose-500",
    accentGlow: "hover:shadow-rose-500/20",
    codePreview: [
      "$ calculate --location NYC --salary 95000",
      "",
      "  Base salary:      $95,000 / yr",
      "  Federal tax:      $16,290",
      "  After-tax:        $67,234 / yr",
      "  Take-home/month:   $5,603",
    ],
    codeColor: "text-slate-600",
  },
];
