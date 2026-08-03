import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-[var(--background)] px-6 pt-8 pb-20">
        <ProjectsSection />
      </main>
    </>
  );
}