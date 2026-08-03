import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailsPage(props: PageProps) {
  const params = await props.params;

  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 pt-6 pb-20">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)] transition hover:text-[var(--coral)]"
      >
        ← Back to Projects
      </Link>

      {/* Title */}
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl leading-tight">
        {project.title}
      </h1>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-3">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-[var(--hairline)] bg-[#1d1b22] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--coral)]"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Project Image */}
      <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--hairline)] shadow-xl shadow-black/30">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="w-full object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="mt-14 space-y-14 border-t border-[var(--hairline)] pt-12">

        {/* Business Problem */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--coral)] text-sm font-bold text-white">
              1
            </span>

            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Business Problem
            </h2>
          </div>

          <p className="text-lg leading-8 text-[var(--muted)]">
            {project.businessProblem}
          </p>
        </section>

        {/* Methodology */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--coral)] text-sm font-bold text-white">
              2
            </span>

            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Methodology & Tech Stack
            </h2>
          </div>

          <p className="whitespace-pre-line text-lg leading-8 text-[var(--muted)]">
            {project.methodology}
          </p>
        </section>

        {/* Impact */}
        <section>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--coral)] text-sm font-bold text-white">
              3
            </span>

            <h2 className="text-2xl font-bold text-[var(--foreground)]">
              Key Insights & Business Impact
            </h2>
          </div>

          <div className="rounded-3xl border border-[var(--hairline)] bg-[#1b1920] p-6">
            <p className="text-lg leading-8 text-[var(--foreground)]">
              {project.impact}
            </p>
          </div>
        </section>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--coral)] px-6 py-3 font-semibold text-white transition hover:scale-105 hover:opacity-90"
            >
              View GitHub Repository
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[var(--hairline)] px-6 py-3 font-semibold text-[var(--foreground)] transition hover:border-[var(--coral)] hover:text-[var(--coral)]"
            >
              Live Dashboard / Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}