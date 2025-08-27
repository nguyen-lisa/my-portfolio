import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";

export default function Home() {
  // optional: newest first
  const projects = [...allProjects].sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

  return (
    <section
      id="projects"
      className="container mx-auto my-12 px-4 text-center transition duration-700 ease-out motion-reduce:transition-none"
    >
      <h2 className="mb-3 text-3xl font-semibold text-white-900 md:text-4xl">
        My Work
      </h2>
      <p className="mx-auto max-w-2xl text-white-700">
        Selected projects showcasing my work in UI/UX and frontend development.
      </p>

      {/* Project grid */}
      <div className="mt-8 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
        {projects.length === 0 ? (
          <div
            className="mx-auto inline-block rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-white"
            aria-label="Status: Coming soon"
          >
            Coming Soon
          </div>
        ) : (
          projects.map((p) => (
            <ProjectCard
              key={p._id}
              title={p.title}
              summary={p.summary}
              tags={p.tags}
              //year={p.year}
              imageSrc={p.image}
              imageAlt={p.title}
              caseStudyUrl={p.url}
              demoUrl={p.demoUrl}
            />
          ))
        )}
      </div>
    </section>
  );
}
