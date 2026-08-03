import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export default function ProjectCard({
  id,
  title,
  description,
  image,
  technologies,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${id}`}
      className="panel group block overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[var(--coral)]"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold tracking-tight text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--coral)]">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[var(--muted)] line-clamp-3">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--hairline)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-[var(--hairline)] pt-4">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral)]">
            View Case Study
            <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}