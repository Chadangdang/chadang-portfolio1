"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/content";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="How I create value"
          subtitle="From concept to launch, I partner with teams to design, develop, and ship purposeful experiences."
        />
        <div className="grid gap-8 md:grid-cols-3">
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
                <Card className="h-full rounded-3xl border-white/60 bg-white/50 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
                  <CardHeader className="px-0">
                    <div className="mb-6 inline-flex size-14 items-center justify-center rounded-2xl border border-white/60 bg-white/40 text-secondary-foreground shadow-md">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="font-montserrat text-xl font-semibold tracking-[0.18em] uppercase text-secondary-foreground">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-0">
                    <p className="font-open-sans text-sm leading-6 text-muted-foreground/90">
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