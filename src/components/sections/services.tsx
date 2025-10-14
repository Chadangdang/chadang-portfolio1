"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="relative pb-20 pt-16 sm:pb-28 sm:pt-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="h-full rounded-3xl border-white/60 bg-white/50 p-5 shadow-[var(--shadow-soft)] backdrop-blur sm:p-6">
                  <CardHeader className="px-0">
                    <div className="mb-6 inline-flex size-12 items-center justify-center rounded-2xl border border-white/60 bg-white/40 text-secondary-foreground shadow-md sm:size-14">
                      <Icon className="size-5 text-[#CBA693] sm:size-6" />
                    </div>
                    <CardTitle className="font-montserrat text-lg font-semibold uppercase tracking-[0.2em] text-[#CBA693] sm:text-xl sm:tracking-[0.18em]">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <p className="font-open-sans text-sm leading-6 text-muted-foreground/90 sm:text-base sm:leading-7">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}