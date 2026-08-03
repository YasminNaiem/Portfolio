import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--background)] pt-6">
        <Hero />
      </main>
    </>
  );
}