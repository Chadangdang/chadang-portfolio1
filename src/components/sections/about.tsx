"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const galleryImages = [
  {
    src: "/images/about/about1.jpg",
    alt: "Chadang presenting work on a laptop",
  },
  {
    src: "/images/about/about2.JPG",
    alt: "Chadang collaborating with teammates",
  },
  {
    src: "/images/about/about3.jpg",
    alt: "Chadang hosting a workshop",
  },
  {
    src: "/images/about/about4.JPG",
    alt: "Chadang speaking on stage",
  },
  {
    src: "/images/about/about5.jpg",
    alt: "Chadang exploring creative ideas",
  },
  {
    src: "/images/about/about6.jpg",
    alt: "Chadang collaborating in a studio",
  },
];

export function AboutSection() {
  const totalSlides = galleryImages.length;
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
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const resetAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
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
    (event: React.PointerEvent<HTMLDivElement>) => {
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

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || pointerIdRef.current !== event.pointerId) return;
    updateDragOffset(event.clientX - startXRef.current);
  }, [isDragging, updateDragOffset]);

  const handlePointerEnd = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (pointerIdRef.current !== event.pointerId) return;
      event.currentTarget.releasePointerCapture(event.pointerId);
      finishDrag();
    },
    [finishDrag],
  );

  const handlePointerLeave = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      handlePointerEnd(event);
    },
    [handlePointerEnd, isDragging],
  );

  const aboutHighlights = useMemo(
    () => [
      {
        key: "introduction",
        content: [
          <>
            Hi, I&apos;m <strong className="font-semibold">Chadang Phummarin</strong>, but most people call me{" "}
            <strong className="font-semibold">KanomTian</strong>. I&apos;m 21 years old and currently a{" "}
            <strong className="font-semibold">
            senior Digital Engineering student at Sirindhorn International Institute of Technology (SIIT), Thammasat University.
            </strong>
          </>,
        ],
      },
      {
        key: "curiosity",
        content: [
          <>
            I&apos;ve always been curious about how ideas become reality, how something that starts as a thought can turn into a
            product, an experience, or even a story that connects people.
          </>,
          <>
            Over the past few years, I&apos;ve built <strong className="font-semibold">apps, websites, and games</strong>, but that&apos;s just one side of me.
            I&apos;ve also <strong className="font-semibold">led events, worked on community projects, explored entrepreneurship</strong>, which taught me to see challenges from both creative and strategic perspectives.
          </>,
        ],
      },
      {
        key: "mixing",
        content: [
          <>
            I like mixing <strong className="font-semibold">tech, creativity, and collaboration</strong> to keep life interesting.
            What excites me most is <strong className="font-semibold">connecting technology with creativity and people</strong>, and turning ideas into something real and meaningful.
          </>,
        ],
      },
      {
        key: "values",
        content: [
          <>
            At my core, I&apos;m someone who believes in learning by doing, collaborating with purpose, and finding inspiration in every experience.
          </>,
          <>
            Because for me, <strong className="font-semibold">it&apos;s never just about building things. It&apos;s about building experiences that connect, inspire, and make a difference</strong>.
          </>,
        ],
      },
    ],
    [],
  );
  const translatePercentage = -currentIndex * 100 + (dragOffset / widthRef.current) * 100;

  const primaryHighlights = aboutHighlights.slice(0, 3);
  const coreHighlight = aboutHighlights[3];

  return (
    <section id="about" className="relative z-10 pt-24 pb-16 sm:pt-28 sm:pb-0">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-stretch lg:px-8">
        <motion.div
          className="relative w-full max-w-md shrink-0 lg:h-full mt-10 sm:mt-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            ref={containerRef}
            className="relative h-[360px] overflow-hidden rounded-[2.75rem] border border-white/50 bg-white/30 shadow-[var(--shadow-soft)] backdrop-blur touch-pan-y sm:h-[420px] lg:h-full"
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
              {galleryImages.map((image) => (
                <div key={image.src} className="relative h-full w-full shrink-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={560}
                    height={720}
                    className="h-full w-full select-none object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setCurrentIndex(index);
                    updateDragOffset(0);
                    resetAutoPlay();
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#CBA693]"
                      : "bg-[#CBA693]/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-1 flex-col gap-6 lg:justify-center"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="flex flex-col gap-4">
            <h2
              className="font-montserrat text-3xl font-semibold tracking-[0.22em] uppercase sm:text-4xl"
              style={{ color: "#80786B" }}
            >
              ABOUT ME
            </h2>
          </div>
          <div className="grid gap-4 text-sm leading-6 text-muted-foreground font-open-sans sm:text-base sm:leading-7">
            {primaryHighlights.map((highlight) => (
              <div
                key={highlight.key}
                className="rounded-3xl border border-white/50 bg-white/45 p-6 shadow-[var(--shadow-soft)] backdrop-blur"
              >
                <div className="flex flex-col gap-3">
                  {highlight.content.map((paragraph, paragraphIndex) => (
                    <span key={`${highlight.key}-paragraph-${paragraphIndex}`}>{paragraph}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      {coreHighlight ? (
        <motion.div
          className="mx-auto mt-3 w-full max-w-6xl px-4 sm:mt-5 sm:px-6 lg:px-8"          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-3xl border border-white/60 bg-white/60 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
            <div className="flex flex-col gap-3 text-sm leading-6 text-muted-foreground font-open-sans sm:text-base sm:leading-7">
              {coreHighlight.content.map((paragraph, paragraphIndex) => (
                <span key={`${coreHighlight.key}-paragraph-${paragraphIndex}`}>{paragraph}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ) : null}
    </section>
  );
}