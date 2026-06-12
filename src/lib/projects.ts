export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  previewBg: string;
  titleColor: string;
  animated?: boolean;
  screenshots?: string[];
  localImage?: string;
}

export const projects: Project[] = [
  {
    title: "Virtual QA Platform",
    description:
      "Built a cloud-based QA platform that helps teams create and run automated tests faster using Playwright, AWS Lambda, and AI-generated no-code test cases. Features include real-time monitoring, screenshot capture, video recordings, and live log streaming, significantly reducing the time required to create and execute tests.",
    tech: ["Next.js", "React", "TypeScript", "Playwright", "AWS Lambda", "Claude API"],
    github: "https://github.com/Valritehachi/virtual-qa",
    demo: "https://virtual-qa.vercel.app",
    previewBg: "#064e3b",
    titleColor: "#6ee7b7",
    localImage: "/virtual-qa-preview.png",
  },
  {
    title: "Mr Futon Furniture",
    description:
      "Client project for a Florida-based furniture retailer. The client needed to manage their own content without a developer, so I built a custom Next.js admin panel for content management — letting them update products, delivery info, and blog posts independently. Clean storefront with full CMS capabilities handed to a non-technical owner.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/mr_futon_furniture",
    demo: "https://www.mrfutonfurniture.com/",
    previewBg: "#431407",
    titleColor: "#fdba74",
    screenshots: ["/futon_1.png", "/futon_2.png"],
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
    title: "BOSA Newsletter",
    description:
      "Client project for a nonprofit newsletter organization. Built a full-stack publishing platform with a custom CMS — allowing the client to create, edit, and manage 80+ articles independently. Features a rich text editor, category filtering, image uploads, and an admin dashboard. Handed off to a non-technical owner.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Valritehachi/bosa-newsletter",
    demo: "https://bosaonline.org",
    previewBg: "#1e3a8a",
    titleColor: "#93c5fd",
    localImage: "/bosa_1.png",
  },
];
