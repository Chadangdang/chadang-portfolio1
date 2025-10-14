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
    <div className={cn("flex flex-col gap-2", alignment, className)}>
      {eyebrow ? (
        <span
          className={cn(
            "text-xs font-semibold tracking-[0.45em] uppercase text-secondary-foreground/80",
            eyebrowClassName,
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "font-montserrat text-3xl sm:text-4xl font-bold tracking-[0.22em] text-secondary-foreground",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "max-w-2xl text-base text-muted-foreground/90 font-open-sans",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      ) : null}
      <Separator className="h-1 w-20 bg-primary/70" />
    </div>
  );
}