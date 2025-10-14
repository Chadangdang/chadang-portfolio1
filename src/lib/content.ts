import type { LucideIcon } from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Highlight = {
  title: string;
  description: string;
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
  tags: string[];
};

import { Cpu, Sparkles, Users } from "lucide-react";

export const services: Service[] = [
  {
    title: "Technology",
    description:
      "Full-stack product builds with modern frameworks, clean architecture, and performance-first thinking.",
    icon: Cpu,
  },
  {
    title: "Creativity",
    description:
      "Design systems, storytelling, and concept development that turn abstract ideas into delightful interfaces.",
    icon: Sparkles,
  },
  {
    title: "Collaboration",
    description:
      "Transparent communication, async-friendly workflows, and empathy that keep cross-functional teams aligned.",
    icon: Users,
  },
];

export const softSkills: Highlight[] = [
  {
    title: "Collaboration",
    description:
      "Thrives in multi-disciplinary squads with rituals that keep feedback loops active and respectful.",
  },
  {
    title: "Leadership",
    description:
      "Guides sprints, scopes MVPs, and supports teammates with actionable mentoring and documentation.",
  },
  {
    title: "Communication",
    description:
      "Bridges product, design, and engineering with concise updates and demo-driven checkpoints.",
  },
  {
    title: "Responsibility",
    description:
      "Owns delivery from discovery to launch, balancing business objectives with user experience.",
  },
  {
    title: "Adaptability",
    description:
      "Comfortable iterating with evolving requirements and shipping value in fast-paced environments.",
  },
  {
    title: "Problem Solving",
    description:
      "Translates complex constraints into pragmatic technical plans with measurable success criteria.",
  },
];

export const languages: Highlight[] = [
  {
    title: "Thai",
    description: "Native speaker with cultural fluency and localisation experience.",
  },
  {
    title: "English",
    description: "Professional working proficiency across documentation and stakeholder communication.",
  },
  {
    title: "Spanish",
    description: "Conversational B1/B2 level focused on collaboration and travel contexts.",
  },
];

export const programmingSkills: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "Python", "PHP"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Next.js", "React", "Node.js", "FastAPI", "Expo"],
  },
  {
    category: "Design & Collaboration",
    skills: ["Figma", "Framer Motion", "shadcn/ui"],
  },
];

export const tooling: SkillGroup[] = [
  {
    category: "Platforms & Databases",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "Dev Tooling",
    skills: ["Git", "VS Code", "Vercel"],
  },
  {
    category: "PWA & Automation",
    skills: ["Workbox", "next-sitemap", "next-seo"],
  },
];

export const projects: Project[] = [
  {
    title: "eatsome.",
    subtitle: "Restaurant discovery with the Yelp API",
    description:
      "Responsive React experience with offline caching, interactive maps, and custom filtering.",
    image: "/projects/project-1.svg",
    href: "#",
    tags: ["React", "TypeScript", "Yelp API"],
  },
  {
    title: "Driveflow",
    subtitle: "Automotive event microsite",
    description:
      "Immersive landing page with cinematic imagery, fluid motion, and event booking flows.",
    image: "/projects/project-2.svg",
    href: "#",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
  },
  {
    title: "Aura UI Kit",
    subtitle: "Component system for multi-brand SaaS",
    description:
      "Accessible shadcn/ui extension with tokens, theming utilities, and Storybook documentation.",
    image: "/projects/project-3.svg",
    href: "#",
    tags: ["Design Systems", "shadcn/ui", "Storybook"],
  },
  {
    title: "Nomad Atlas",
    subtitle: "Travel planning progressive web app",
    description:
      "Offline-first itinerary builder with geo search, Contentlayer data, and push notifications.",
    image: "/projects/project-4.svg",
    href: "#",
    tags: ["PWA", "Next.js", "Mapbox"],
  },
  {
    title: "Studio Kanomtian",
    subtitle: "Creative studio showcase",
    description:
      "Story-driven narrative with MDX-powered case studies and cinematic scroll interactions.",
    image: "/projects/project-5.svg",
    href: "#",
    tags: ["MDX", "Contentlayer", "Design"],
  },
  {
    title: "InSeason",
    subtitle: "Farm-to-table marketplace",
    description:
      "Commerce prototype featuring realtime inventory, Sanity CMS, and Plausible analytics dashboards.",
    image: "/projects/project-6.svg",
    href: "#",
    tags: ["Next.js", "Sanity", "Plausible"],
  },
];