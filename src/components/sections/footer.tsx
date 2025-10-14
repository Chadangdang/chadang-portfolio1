"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="relative bg-secondary/90 py-12 text-white sm:py-14">
      <div className="absolute inset-x-0 top-0 -translate-y-1/2">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-center">
          <Link
            href="#home"
            className="group inline-flex items-center gap-3 rounded-full border border-white/30 bg-secondary/80 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 transition hover:bg-secondary sm:px-6 sm:text-xs sm:tracking-[0.35em]"
          >
            Back to top
            <span className="flex size-8 items-center justify-center rounded-full border border-white/20 bg-white/10 transition group-hover:translate-y-[-4px]">
              <ArrowUp className="size-4" />
            </span>
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-4 pt-12 text-center text-sm text-white/70">
        <p className="font-open-sans text-sm text-white/80">
          © {new Date().getFullYear()} Chadang Phummarin. Crafted with late-night ideas and career-daydreams.
        </p>
        <div className="text-[11px] uppercase tracking-[0.24em] text-white/50 sm:text-xs sm:tracking-[0.35em]">
          Next.js • TypeScript • Tailwind • shadcn/ui • PWA ready
        </div>
      </div>
    </footer>
  );
}