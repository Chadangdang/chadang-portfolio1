"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";

const EMAIL_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
      setFeedback("Thanks for reaching out! I'll get back to you soon.");
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Unable to send your message right now. Please try again later.",
      );
    }
  };

  return (
    <section id="contact" className="relative pt-24 pb-20 sm:pt-32 sm:pb-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,#f7f1e8,rgba(203,166,147,0.45))]" />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Let's build together"
          subtitle="From collaborations to casual chats, I’m always up for a good conversation!"
          eyebrowClassName="text-[#80786B]"
          titleClassName="text-[#80786B]"
          subtitleClassName="text-[#80786B]"
        />
        <motion.form
          className="grid gap-6 rounded-[2.5rem] border border-white/60 bg-white/70 p-10 shadow-[var(--shadow-soft)] backdrop-blur"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onSubmit={handleSubmit}
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#756764]">
              Enter your name*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Jane Doe"
              required
              className="h-12 rounded-full border border-secondary/30 bg-white/80 px-6 text-sm font-open-sans text-[#756764] shadow-inner shadow-white/40 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#756764]">
              Enter your email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="hello@chadang.dev"
              required
              className="h-12 rounded-full border border-secondary/30 bg-white/80 px-6 text-sm font-open-sans text-[#756764] shadow-inner shadow-white/40 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
              pattern={EMAIL_PATTERN.source}
              title="Please enter a valid email address (for example, name@example.com)."
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#756764]">
              Phone number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Optional"
              className="h-12 rounded-full border border-secondary/30 bg-white/80 px-6 text-sm font-open-sans text-[#756764] shadow-inner shadow-white/40 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.3em] text-[#756764]">
              Your message*
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Project goals, timelines, context—share as much as you'd like."
              className="rounded-3xl border border-secondary/30 bg-white/80 px-6 py-4 text-sm font-open-sans text-[#756764] shadow-inner shadow-white/40 outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/40"
            />
          </div>
          <div className="flex items-center justify-center pt-2">
            <Button
              type="submit"
              className="rounded-full bg-secondary px-10 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground shadow-[0_12px_40px_rgba(117,103,100,0.25)]"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </Button>
          </div>
          <p
            className="text-center text-sm font-open-sans text-[#756764]"
            role="status"
            aria-live="polite"
          >
            {feedback}
          </p>
        </motion.form>
      </div>
    </section>
  );
}