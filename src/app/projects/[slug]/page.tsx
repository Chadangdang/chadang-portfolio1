import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectDetail } from "@/components/projects/project-detail";
import { FooterSection } from "@/components/sections/footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/content-projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectParams = {
  slug: string;
};

type ProjectPageProps = {
  params: Promise<ProjectParams>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.gallery.length
        ? [
            {
              url: project.gallery[0].src,
              width: 64,
              height: 48,
              alt: project.gallery[0].alt,
            },
          ]
        : undefined,
    },
    twitter: {
      title: project.title,
      description: project.summary,
      images: project.gallery.length ? [project.gallery[0].src] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-secondary/10">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_60%)]" />
      <SiteHeader linkPrefix="/" homeHref="/" />
      <main className="relative z-10 flex flex-col gap-16 pt-32 pb-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <ProjectDetail project={project} />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
