"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";

const highlights = [
  "Product-focused frontend engineer blending design and development for cohesive experiences.",
  "Experienced with cross-platform delivery using Next.js, Expo, and modern CI/CD pipelines.",
  "Comfortable collaborating with designers, founders, and stakeholders in remote-first teams.",
];

export function AboutSection() {
  return (
    <section id="about" className="relative z-10 py-24 sm:py-28">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <motion.div
          className="relative w-full max-w-lg shrink-0"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="absolute -left-6 -top-8 h-32 w-32 rounded-full bg-secondary/30 blur-2xl" />
          <div className="absolute -right-8 bottom-10 h-28 w-28 rounded-[2.5rem] border border-white/50 bg-white/40 backdrop-blur" />
          <div className="relative overflow-hidden rounded-[2.75rem] border border-white/50 bg-white/30 shadow-[var(--shadow-soft)] backdrop-blur">
            <Image
              src="/images/about-placeholder.svg"
              alt="Chadang collaborating with a team"
              width={560}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col gap-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <SectionHeader
            eyebrow="About me"
            title="Intentional, curious, collaborative"
            subtitle="I build digital products that feel effortless, blending technical reliability with tactile storytelling."
            align="left"
          />
          <div className="grid gap-4 text-base leading-7 text-muted-foreground font-open-sans">
            {highlights.map((item) => (
              <p key={item} className="rounded-2xl border border-white/50 bg-white/40 p-5 shadow-sm backdrop-blur">
                {item}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}