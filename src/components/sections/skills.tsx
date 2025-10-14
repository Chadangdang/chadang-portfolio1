"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import {
  languages,
  programmingSkills,
  softSkills,
  tooling,
} from "@/lib/content";

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-8 -z-10 h-[680px] bg-secondary/10 blur-3xl" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="craft, connect and create"
          subtitle="combine technical craft with people skills to bring ideas to life"
          titleClassName="text-[#756764]"
        />
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            className="rounded-[2.5rem] border border-white/60 bg-white/60 p-10 shadow-[var(--shadow-soft)] backdrop-blur"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="font-montserrat text-lg font-semibold uppercase tracking-[0.25em] text-[#80786B]">
              Technical Stack
            </h3>
            <div className="mt-8 grid gap-8">
              {programmingSkills.map((group) => (
                <div key={group.category} className="space-y-4">
                  <p className="font-open-sans text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                    {group.category}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="rounded-full border-secondary/40 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[#756764]"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
              <div className="grid gap-6">
                {tooling.map((group) => (
                  <div key={group.category} className="space-y-3">
                    <p className="font-open-sans text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/80">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => (
                        <Badge
                          key={`${group.category}-${skill}`}
                          variant="secondary"
                          className="rounded-full bg-secondary/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-secondary-foreground"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="rounded-[2.25rem] border border-white/60 bg-white/60 p-8 shadow-[var(--shadow-soft)] backdrop-blur">
              <h3 className="font-montserrat text-lg font-semibold uppercase tracking-[0.25em] text-[#80786B]">
                Soft Skills
              </h3>
              <div className="mt-6 grid gap-4 text-sm leading-6 text-muted-foreground/90 font-open-sans">
                {softSkills.map((skill) => (
                  <p key={skill.title} className="rounded-2xl border border-white/60 bg-white/70 p-4">
                    <span className="block font-semibold uppercase tracking-[0.32em] text-[#80786B]">
                      {skill.title}
                    </span>
                    <span className="mt-1 block text-xs tracking-wide text-muted-foreground/80">
                      {skill.description}
                    </span>
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-[2.25rem] border border-white/60 bg-white/60 p-8 shadow-[var(--shadow-soft)] backdrop-blur">
              <h3 className="font-montserrat text-lg font-semibold uppercase tracking-[0.25em] text-[#80786B]">
                Languages
              </h3>
              <div className="mt-6 space-y-4 font-open-sans text-sm text-muted-foreground/90">
                {languages.map((language) => (
                  <div key={language.title} className="flex flex-col gap-1 rounded-2xl border border-white/60 bg-white/70 p-4">
                    <span className="font-semibold uppercase tracking-[0.32em] text-secondary-foreground">
                      {language.title}
                    </span>
                    <span className="text-xs tracking-wide text-muted-foreground/80">
                      {language.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}