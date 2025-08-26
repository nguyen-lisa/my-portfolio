export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 text-center text-sm text-slate-600 border-t border-slate-200">
      © {year} Lisa Nguyen ·{" "}
      <a href="/resume.pdf" className="underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600">
        Resume
      </a>{" "}
      ·{" "}
      <a href="https://github.com/nguyen-lisa" target="_blank" rel="noopener noreferrer"
         className="underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600">
        GitHub
      </a>{" "}
      ·{" "}
      <a href="https://www.linkedin.com/in/lisa-nguyen-48825a160/" target="_blank" rel="noopener noreferrer"
         className="underline hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-600">
        LinkedIn
      </a>
    </footer>
  );
}
