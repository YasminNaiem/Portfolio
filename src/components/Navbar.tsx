"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[92%] max-w-5xl">
      <nav className="flex h-14 items-center justify-between rounded-full border border-white/10 bg-[#17161d]/80 px-6 backdrop-blur-xl shadow-lg shadow-black/20">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--coral)] text-xs font-bold text-white">
            YM
          </div>

          <span className="text-base font-semibold tracking-tight text-white">
            Yasmin
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[15px] font-medium text-gray-300 transition-all duration-300 hover:text-[var(--coral)]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mt-3 rounded-2xl border border-white/10 bg-[#17161d]/95 p-5 backdrop-blur-xl shadow-lg md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-[15px] font-medium text-gray-300 transition hover:text-[var(--coral)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}