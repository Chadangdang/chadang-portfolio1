"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";

const socials = [
  { href: "mailto:chadang.phu@gmail.com", label: "Email", icon: Mail },
  { href: "https://github.com/Chadangdang", label: "GitHub", icon: Github },
  { href: "https://www.linkedin.com/in/chadang-phummarin-8a5985268/", label: "LinkedIn", icon: Linkedin },
  {
    href: "https://www.instagram.com/chadangdang?igsh=MWYxMnVpeTd0Mm8wYQ%3D%3D&utm_source=qr",
    label: "Instagram",
    icon: Instagram,
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pb-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[620px] bg-gradient-to-b from-primary/60 via-primary/40 to-transparent" />
      <div className="absolute -left-32 top-32 -z-10 h-72 w-72 rounded-full bg-white/40 blur-3xl" />
      <div className="absolute -right-12 top-24 -z-10 h-64 w-64 rounded-full bg-secondary/30 blur-3xl" />
      <div className="px-4 pt-8 sm:px-6 lg:px-8">
        <SiteHeader />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-4 pt-28 sm:px-6 lg:flex-row lg:items-start lg:gap-20 lg:px-8">
        <motion.div
          className="flex max-w-xl flex-col gap-6"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="font-montserrat text-sm font-semibold uppercase tracking-[0.35em] text-[#756764]">
            Hi, I am
          </span>
          <h1 className="font-raleway text-4xl sm:text-5xl lg:text-6xl font-bold text-[#756764]">
            Chadang Phummarin
          </h1>
          <p className="font-montserrat text-lg uppercase tracking-[0.3em] text-primary">
            kanomtian
          </p>
          <p className="font-open-sans text-base leading-7 text-muted-foreground/90">
            Welcome to my little corner of the internet.
            <br />
            I build experiences where design meets tech and vision meets action
            <br />
            turning ideas into real impact.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-secondary px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground shadow-[0_12px_40px_rgba(117,103,100,0.25)]">
              <a href="#portfolio">Explore work</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-[#80786B] bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#80786B] hover:border-[#80786B] hover:bg-[#80786B]/10"
            >
              <a href="#about">About me</a>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            {socials.map(({ href, label, icon: Icon }) => (
              <Button
                key={label}
                asChild
                variant="outline"
                size="icon"
                className="size-12 rounded-xl border border-[#CBA693] bg-white/40 text-[#CBA693] shadow-[0_8px_28px_rgba(117,103,100,0.18)] backdrop-blur"
              >
                <a href={href} aria-label={label} target="_blank" rel="noreferrer">
                  <Icon className="size-5" />
                </a>
              </Button>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="relative w-full max-w-md"
          initial={{ opacity: 0, scale: 0.92, x: 32 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
        >
          <div className="absolute -top-10 -left-6 h-28 w-28 rounded-3xl border border-white/50 bg-white/40 backdrop-blur" />
          <div className="absolute -bottom-8 -right-4 h-32 w-32 rounded-full bg-secondary/40 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/40 bg-white/20 shadow-[var(--shadow-soft)] backdrop-blur">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Chadang Phummarin"
              width={480}
              height={640}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}