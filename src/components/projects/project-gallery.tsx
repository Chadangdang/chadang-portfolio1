"use client";

/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { ProjectGalleryImage } from "@/lib/content-projects";

type ProjectGalleryProps = {
  images: ProjectGalleryImage[];
  className?: string;
};

export function ProjectGallery({ images, className }: ProjectGalleryProps) {
  const totalSlides = images.length;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (totalSlides <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(timer);
  }, [totalSlides, activeIndex]);

  const handleSelect = (index: number) => {
    setActiveIndex(index);
  };

  if (totalSlides === 0) {
    return null;
  }

  const activeImage = images[activeIndex] ?? images[0];

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div className="relative w-full">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeImage.src}
            className="flex justify-center"
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[75vh] w-auto max-w-full rounded-3xl"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {totalSlides > 1 ? (
        <div className="flex gap-2">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={image.src}
                type="button"
                onClick={() => handleSelect(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-[#756764]/40 transition-all",
                  isActive
                    ? "w-6 bg-[#756764]"
                    : "bg-[#756764]/30 hover:bg-[#756764]/60",
                )}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={isActive}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}