"use client";

import Image from "next/image";
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
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.75rem] border border-white/40 bg-white/40 shadow-[0_24px_60px_rgba(117,103,100,0.22)] backdrop-blur",
        className,
      )}
    >
      <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeImage.src}
            className="absolute inset-0"
            initial={{ opacity: 0.4, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {totalSlides > 1 ? (
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={image.src}
                type="button"
                onClick={() => handleSelect(index)}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-white/70 transition-all",
                  isActive
                    ? "w-6 bg-white"
                    : "bg-white/40 hover:bg-white/70",
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