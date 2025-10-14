import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/lib/content-projects";

import { ProjectGallery } from "./project-gallery";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="flex flex-col gap-12">
      <SectionHeader
        eyebrow="Case Study"
        title={project.title}
        subtitle={project.subtitle}
        align="center"
        className="text-secondary-foreground [&>*]:text-secondary-foreground"
        eyebrowClassName="text-secondary-foreground/70"
        subtitleClassName="text-secondary-foreground/80"
      />
      <ProjectGallery images={project.gallery} />
      <div className="flex flex-col gap-8 rounded-[2.75rem] border border-secondary/20 bg-white/80 p-8 shadow-[0_24px_60px_rgba(117,103,100,0.18)]">
        <div className="space-y-4 text-base leading-7 text-secondary-foreground/90 font-open-sans">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat text-sm font-semibold uppercase tracking-[0.35em] text-secondary-foreground/80">
            Skills &amp; Tools
          </h3>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {project.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="rounded-full border-secondary/30 bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary-foreground/80"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}