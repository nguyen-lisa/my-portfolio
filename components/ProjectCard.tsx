type ProjectCardProps = {
  title: string;
  summary: string;
  tags?: string[];
  year?: string | number;
  imageSrc?: string;
  imageAlt?: string;
  caseStudyUrl?: string;
  demoUrl?: string;
};

export default function ProjectCard({
  title,
  summary,
  tags = [],
  year,
  imageSrc,
  imageAlt = "",
  caseStudyUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Thumbnail */}
      <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full place-items-center text-slate-400">
            <span>No image</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-slate-900">{title}</h3>
          {year && (
            <span className="rounded-full border border-slate-200 px-2 py-0.5 text-xs text-slate-600">
              {year}
            </span>
          )}
        </div>

        <p className="text-sm text-slate-600">{summary}</p>

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-2 text-xs text-slate-700">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full bg-slate-50 px-2.5 py-1 ring-1 ring-slate-200"
              >
                {t}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-3 flex gap-2">
          {caseStudyUrl && (
            <a
              href={caseStudyUrl}
              className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800"
            >
              View Case Study
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 hover:bg-slate-50"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
