export default function Home() {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 text-center my-12
                 transition duration-700 ease-out will-change-transform
                 motion-reduce:transition-none"
    >
      <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-white text-slate-900">
        My Work
      </h2>
      <p className="text-slate-700 text-white max-w-2xl mx-auto">
        Projects coming soon. Check back here for live case studies.
      </p>
      <div
        className="mt-6 inline-block rounded-full bg-slate-800 text-white px-3 py-1 text-sm font-medium"
        aria-label="Status: Coming soon"
      >
        Coming Soon
      </div>
    </section>
  );
}
