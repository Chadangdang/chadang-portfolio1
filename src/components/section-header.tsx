import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "center",
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
        <span className="text-xs font-semibold tracking-[0.45em] uppercase text-secondary-foreground/80">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-montserrat text-3xl sm:text-4xl font-bold tracking-[0.22em] text-secondary-foreground">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-2xl text-base text-muted-foreground/90 font-open-sans">{subtitle}</p>
      ) : null}
      <Separator className="h-1 w-20 bg-primary/70" />
    </div>
  );
}