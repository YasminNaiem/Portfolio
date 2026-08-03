import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-0 pb-20">
      {/* Heading */}
      <div className="mb-14 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--coral)]">
          MY WORK
        </span>

        <h2 className="mt-3 text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl">
          Featured Projects
        </h2>

        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
          A selection of dashboards, predictive models, and analytics
          solutions — from raw data to actionable business insight.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}