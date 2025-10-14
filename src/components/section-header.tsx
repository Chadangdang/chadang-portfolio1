import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  eyebrowClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
  eyebrowClassName,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  const alignment =
    align === "left"
      ? "items-start text-left"
      : align === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <div className={cn("flex flex-col gap-3 sm:gap-4", alignment, className)}>
      {eyebrow ? (
        <span
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary-foreground/80 sm:text-xs sm:tracking-[0.45em]",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-montserrat text-2xl font-bold tracking-[0.16em] text-secondary-foreground sm:text-4xl sm:tracking-[0.22em]",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-sm font-open-sans text-muted-foreground/90 sm:text-base",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
      <Separator className="h-1 w-16 bg-primary/70 sm:w-20" />
    </div>
  );
}
