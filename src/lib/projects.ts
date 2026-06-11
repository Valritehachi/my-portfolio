export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  previewBg: string;
  titleColor: string;
  animated?: boolean;
}

export const projects: Project[] = [
  {
    title: "Virtual QA Platform",
    description:
      "Cloud-based testing platform that accelerates QA workflows by supporting both no-code and automated testing. Used Claude API to auto-generate 500+ test cases from plain-language descriptions. Executed 200+ tests concurrently on AWS Lambda with real-time monitoring, screenshot capture, and log streaming. Reduced manual test creation time by 75%.",
    tech: ["Next.js", "React", "TypeScript", "Playwright", "AWS Lambda", "Claude API"],
    github: "https://github.com/Valritehachi/virtual-qa",
    demo: "https://virtual-qa.vercel.app",
    previewBg: "#064e3b",
    titleColor: "#6ee7b7",
  },
  {
    title: "Best AI Jobs",
    description:
      "A directory of AI-powered income opportunities — from annotation and transcription to coding. Includes a quiz tool to match users with the right remote work based on their skills and hourly rate goals.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/ai_income_guide",
    demo: "https://www.bestaijobs.net/",
    previewBg: "#1e3a5f",
    titleColor: "#93c5fd",
  },
  {
    title: "Mr Futon Furniture",
    description:
      "Client project for a Florida-based furniture retailer. The client needed to manage their own content without a developer, so I built a custom Next.js admin panel for content management — letting them update products, delivery info, and blog posts independently. Clean storefront with full CMS capabilities handed off to a non-technical owner.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/mr_futon_furniture",
    demo: "https://www.mrfutonfurniture.com/",
    previewBg: "#431407",
    titleColor: "#fdba74",
  },
  {
    title: "Paragon Federal Strategies",
    description:
      "Quick turnaround client project for a federal compliance and governance firm. The business needed a professional online presence fast — I delivered a clean corporate site covering their key services: PBM oversight, audit readiness, and federal contract management. Built and shipped on a tight deadline.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/paragon_site",
    demo: "https://www.paragonfederalstrategiescorp.com/",
    previewBg: "#2e1065",
    titleColor: "#d8b4fe",
  },
  {
    title: "Salary Calculator",
    description:
      "A comprehensive suite of salary tools — calculate after-tax take-home pay, convert salary to hourly, compare job offers, and analyze cost-of-living differences across U.S. cities.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/salary-calculator",
    demo: "https://www.salary-calculate.com/",
    previewBg: "#4c0519",
    titleColor: "#fda4af",
    animated: true,
  },
];
