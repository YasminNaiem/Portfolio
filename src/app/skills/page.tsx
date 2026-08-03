import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col justify-center bg-[var(--background)] px-6">
        <Skills />
      </main>
    </>
  );
}