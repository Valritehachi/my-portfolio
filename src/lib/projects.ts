export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  previewBg: string;
  titleColor: string;
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
  },
  {
    title: "ShipSticks Test Suite",
    description:
      "Comprehensive automated test suite for the ShipSticks booking platform. Collaborated with developers on the test runner architecture. Created end-to-end tests covering booking, payment, and shipping flows. Reduced regression testing time by 50%. Maintained a consistently high pass rate across 1,243 commits and 100+ test cases.",
    tech: ["Playwright", "TypeScript"],
    github: "https://github.com/assetfoundry/shipsticks_automated_tests",
    previewBg: "bg-white",
    titleColor: "text-teal-400",
    codePreview: [
      "$ npx playwright test --reporter=list",
      "",
      "  booking_flow.spec     ✓",
      "  payment_flow.spec     ✓",
      "  shipping_flow.spec    ✓",
      "",
      "  100 passed in 14.2s",
    ],
    codeColor: "text-slate-300",
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
    codePreview: [
      "$ calculate --location NYC --salary 95000",
      "",
      "  Base salary:      $95,000 / yr",
      "  Federal tax:      $16,290",
      "  After-tax:        $67,234 / yr",
      "  Take-home/month:   $5,603",
    ],
    codeColor: "text-slate-300",
  },
];
