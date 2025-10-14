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
        title={project.title}
        subtitle={project.subtitle}
        align="center"
        className="gap-5"
        titleClassName="font-montserrat text-3xl sm:text-4xl font-bold tracking-[0.22em] text-[#756764]"
        subtitleClassName="font-open-sans text-base text-[#80786B]"
      />
      <ProjectGallery images={project.gallery} className="mx-auto w-full max-w-4xl px-4 sm:px-0" />
      <div className="flex flex-col gap-8 rounded-[32px] bg-[#F2EADF] p-6 shadow-[0_20px_45px_rgba(117,103,100,0.1)] sm:p-10">
        <div className="space-y-4 font-open-sans text-sm leading-6 text-[#756764] sm:text-base sm:leading-7">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-montserrat text-xs font-semibold uppercase tracking-[0.28em] text-[#756764] sm:text-sm sm:tracking-[0.35em]">
            Skills &amp; Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="rounded-full border border-[#756764]/40 bg-transparent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#756764] sm:text-[11px] sm:tracking-[0.3em]"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        {project.links?.length ? (
          <div className="flex flex-col gap-4">
            <h3 className="font-montserrat text-xs font-semibold uppercase tracking-[0.28em] text-[#756764] sm:text-sm sm:tracking-[0.35em]">
              Project Links
            </h3>
            <div className="flex flex-col gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-white/60 px-4 py-2 font-open-sans text-sm font-semibold text-[#756764] underline-offset-4 transition hover:bg-white/80 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}