"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#f7f1e8,rgba(203,166,147,0.45))]" />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build together"
          subtitle="Share project details, collaboration ideas, or simply say hi. Every conversation starts with curiosity."
        />
        <motion.form
          className="grid gap-6 rounded-[2.5rem] border border-white/60 bg-white/70 p-10 shadow-[var(--shadow-soft)] backdrop-blur"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
              Enter your name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              className="h-12 rounded-full border border-secondary/30 bg-white/80 px-6 text-sm font-open-sans text-secondary-foreground shadow-inner shadow-white/40 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
              Enter your email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="hello@chadang.dev"
              required
              className="h-12 rounded-full border border-secondary/30 bg-white/80 px-6 text-sm font-open-sans text-secondary-foreground shadow-inner shadow-white/40 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Optional"
              className="h-12 rounded-full border border-secondary/30 bg-white/80 px-6 text-sm font-open-sans text-secondary-foreground shadow-inner shadow-white/40 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
              Your message*
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Project goals, timelines, context—share as much as you'd like."
              className="rounded-3xl border border-secondary/30 bg-white/80 px-6 py-4 text-sm font-open-sans text-secondary-foreground shadow-inner shadow-white/40 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
            />
          </div>
          <div className="flex items-center justify-center pt-2">
            <Button
              type="submit"
              className="rounded-full bg-secondary px-10 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground shadow-[0_12px_40px_rgba(117,103,100,0.25)]"
            >
              Submit
            </Button>
          </div>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground/80">
            Powered by Next.js • Ready for mobile, desktop & PWA experiences
          </p>
        </motion.form>
      </div>
    </section>
  );
}