export type ProjectItem = {
  slug: string;           // matches folder under /app/projects/<slug>/
  title: string;
  summary: string;
  tags?: string[];
  year?: number;
  image?: string;         // points to /public/images/...
  demoPath?: string;      // optional live demo route e.g. /demos/<slug>
};

export const PROJECTS: ProjectItem[] = [
  {
    slug: "civic-reporting",
    title: "Accessible Civic Issue Reporting",
    summary:
      "Mobile-first UI to report city issues with icons, voice input, and auto-location.",
    tags: ["UI/UX", "Accessibility", "Mobile"],
    year: 2025,
    image: "/images/projects/civic-reporting.jpg",
    demoPath: "/demos/civic-reporting",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    summary:
      "Accessibility-first portfolio site built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Frontend", "Next.js", "Tailwind"],
    year: 2025,
    image: "/images/projects/portfolio.jpg",
  },
];
