"use client";

/* eslint-disable @next/next/no-img-element */

import {
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";
import type { ProjectGalleryImage } from "@/lib/content-projects";

type ProjectGalleryProps = {
  images: ProjectGalleryImage[];
  className?: string;
};

export function ProjectGallery({ images, className }: ProjectGalleryProps) {
  const totalSlides = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pointerIdRef = useRef<number | null>(null);
  const startXRef = useRef(0);
  const widthRef = useRef(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateDragOffset = useCallback((value: number) => {
    setDragOffset(value);
  }, []);

  const nextSlide = useCallback(() => {
    if (totalSlides <= 0) return;
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides <= 0) return;
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const resetAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    if (totalSlides <= 1) {
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
  }, [totalSlides]);

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [resetAutoPlay]);

  const finishDrag = useCallback(() => {
    setIsDragging(false);
    const threshold = widthRef.current * 0.15;

    if (dragOffset <= -threshold) {
      nextSlide();
    } else if (dragOffset >= threshold) {
      prevSlide();
    }

    updateDragOffset(0);
    resetAutoPlay();
    pointerIdRef.current = null;
  }, [dragOffset, nextSlide, prevSlide, resetAutoPlay, updateDragOffset]);

  const handlePointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      event.preventDefault();
      setIsDragging(true);
      pointerIdRef.current = event.pointerId;
      startXRef.current = event.clientX;
      widthRef.current = containerRef.current.clientWidth || 1;

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      updateDragOffset(0);
      event.currentTarget.setPointerCapture(event.pointerId);
    },
    [updateDragOffset],
  );

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging || pointerIdRef.current !== event.pointerId) return;
      updateDragOffset(event.clientX - startXRef.current);
    },
    [isDragging, updateDragOffset],
  );

  const handlePointerEnd = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (pointerIdRef.current !== event.pointerId) return;
      event.currentTarget.releasePointerCapture(event.pointerId);
      finishDrag();
    },
    [finishDrag],
  );

  const handlePointerLeave = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      handlePointerEnd(event);
    },
    [handlePointerEnd, isDragging],
  );

  if (totalSlides === 0) {
    return null;
  }

  const translatePercentage =
    -currentIndex * 100 + (dragOffset / widthRef.current) * 100;

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <div
        ref={containerRef}
        className="relative h-[260px] w-full overflow-hidden rounded-[2.75rem] border border-white/50 bg-white/40 shadow-[var(--shadow-soft)] backdrop-blur-sm sm:h-[420px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onPointerLeave={handlePointerLeave}
      >
        <div
          className="flex h-full"
          style={{
            transform: `translateX(${translatePercentage}%)`,
            transition: isDragging ? "none" : "transform 0.6s ease",
          }}
        >
          {images.map((image) => (
            <div key={image.src} className="relative flex h-full w-full shrink-0 items-center justify-center bg-white/40">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full select-none object-contain"
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {totalSlides > 1 ? (
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={`project-gallery-indicator-${index}`}
                type="button"
                onClick={() => {
                  setCurrentIndex(index);
                  updateDragOffset(0);
                  resetAutoPlay();
                }}
                className={cn(
                  "h-2.5 w-2.5 rounded-full transition-all",
                  index === currentIndex
                    ? "bg-[#CBA693]"
                    : "bg-[#CBA693]/40 hover:bg-[#CBA693]/70",
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={index === currentIndex}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
