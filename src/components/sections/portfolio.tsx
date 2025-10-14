"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { SectionHeader } from "@/components/section-header";
import { projects } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const filterOptions = [
  { key: "mostRecent", label: "Most Recent" },
  { key: "code", label: "Code" },
  { key: "organize", label: "Organize" },
  { key: "internship", label: "Internship" },
  { key: "competition", label: "Competition" },
] as const;

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filterOptions)[number]["key"]>(
    filterOptions[0].key,
  );

  const sortedProjects = useMemo(
    () =>
      [...projects].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === "mostRecent") {
      return sortedProjects;
    }

    return sortedProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter, sortedProjects]);

  return (
    <section id="portfolio" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-secondary/90" />
      <div className="absolute inset-x-0 top-0 -z-0 h-40 bg-gradient-to-b from-white/20 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected journeys"
          subtitle="A collection of ideas turned real, Each project tells a story of growth, creativity, and a bit of grit. Every one taught me something new about building, leading, or simply pushing an idea forward."
          className="text-white [&>*]:text-white [&_span]:text-white/70"
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap items-center gap-3">
            {filterOptions.map((option) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setActiveFilter(option.key)}
                className={cn(
                  "rounded-full border border-white/30 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-white/70 transition-colors",
                  activeFilter === option.key
                    ? "bg-white text-secondary"
                    : "hover:border-white/50 hover:text-white",
                )}
                aria-pressed={activeFilter === option.key}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-[2.25rem] border border-white/20 bg-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    sizes="(min-width: 1024px) 50vw, (min-width: 768px) 60vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent" />
                </div>
                <div className="relative flex flex-col gap-4 p-8 text-white">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-montserrat text-2xl font-semibold uppercase tracking-[0.25em]">
                      {project.title}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-white/70">View more →</span>
                  </div>
                  <p className="font-open-sans text-sm text-white/80">{project.subtitle}</p>
                  <p className="font-open-sans text-sm leading-6 text-white/70">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full border-white/40 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/80"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}