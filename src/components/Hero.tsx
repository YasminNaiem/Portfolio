import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pt-16 pb-8 md:px-8 md:pt-12">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        {/* Left: circular photo with color blobs */}
        <div className="animate-fade-up relative z-0 mx-auto w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px]">
          <span className="absolute -left-2 -top-2 -z-10 h-12 w-12 rounded-full bg-[var(--coral)]" />
          <span className="absolute -bottom-2 -right-2 -z-10 h-9 w-9 rounded-full bg-[var(--coral-soft)]" />
          <div className="relative aspect-square w-full overflow-hidden rounded-full border-4 border-[var(--coral)]/40">
            <Image
              src="/images/Me.png"
              alt="Yasmin Mohamed"
              fill
              priority
              quality={90}
              sizes="300px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: About Me content */}
        <div className="animate-fade-up">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-[var(--foreground)] sm:text-4xl lg:text-[3.2rem]">
            Turning raw data into{" "}
            <span className="text-[var(--coral)]">actionable insights.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)] lg:text-base">
            Hi, I&apos;m Yasmin Mohamed, a Computer & Data Science student
            specializing in Data Analytics, Machine Learning, and Business
            Intelligence. I enjoy transforming raw data into dashboards and
            models that businesses can actually act on.
          </p>

          {/* Contact info grid — replace the placeholder URLs/email with your real ones */}
          <div className="panel mt-5 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 rounded-2xl p-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--coral)]">Name</p>
              <p className="mt-0.5 text-sm text-[var(--foreground)]">Yasmin Mohamed</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--coral)]">Gmail</p>
              <a                href="mailto:yasminnaiem648@gmail.com"
                className="mt-0.5 block truncate text-sm text-[var(--foreground)] transition hover:text-[var(--coral)]"
              >
                yasminnaiem648@gmail.com
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--coral)]">LinkedIn</p>
              <a
                href="https://linkedin.com/in/yasmin-naiem-747785293"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 block truncate text-sm text-[var(--foreground)] transition hover:text-[var(--coral)]"
              >
                linkedin.com/in/yasmin-naiem-747785293
              </a>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--coral)]">GitHub</p>
              <a
                href="https://github.com/YasminNaiem"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 block truncate text-sm text-[var(--foreground)] transition hover:text-[var(--coral)]"
              >
                github.com/YasminNaiem
              </a>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--coral)] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              My Resume ⬇
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}