import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yasmin Mohamed | Data Science & Analytics Portfolio",
  description:
    "Computer & Data Science student specializing in Data Analytics, Machine Learning, and Business Intelligence.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geist.className} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <Navbar />

        {/* Main Content */}
        <main className="mx-auto w-full pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}