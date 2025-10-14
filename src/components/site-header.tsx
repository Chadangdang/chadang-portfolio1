"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
];

export function SiteHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-1/2 top-6 z-50 flex w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/40 bg-white/30 px-6 py-4 backdrop-blur-lg shadow-[0_10px_60px_rgba(117,103,100,0.18)]"
    >
      <Link href="#home" className="font-montserrat text-xl font-bold tracking-[0.3em] text-[#756764]">
        CHADANG
      </Link>
      <div className="hidden items-center gap-8 md:flex">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-[#756764] transition-colors hover:text-[#756764]"
                >
                  {link.label}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          asChild
          className="rounded-full border border-secondary-foreground/30 bg-secondary/90 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-[0_10px_40px_rgba(117,103,100,0.25)] hover:bg-secondary"
        >
          <Link href="#contact">Contact me</Link>
        </Button>
      </div>
      <Button
        asChild
        variant="ghost"
        className="md:hidden text-[#756764] hover:text-[#756764]"
      >
        <Link href="#contact" className="text-xs uppercase tracking-[0.35em]">
          Contact
        </Link>
      </Button>
    </motion.header>
  );
}