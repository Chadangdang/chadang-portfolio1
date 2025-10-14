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
  category: "code" | "organize" | "internship" | "competition";
  date: string;
};

import { Cpu, Sparkles, Users } from "lucide-react";

export const services: Service[] = [
  {
    title: "Technology",
    description:
      "I can turn ideas into functional and responsive websites or apps using modern tools and frameworks. From front-end visuals to back-end logic, I make sure everything works seamlessly together.",
    icon: Cpu,
  },
  {
    title: "Creativity",
    description:
      "I can bring ideas to life in different forms through design, storytelling, or fresh concepts that make a project stand out. I enjoy finding unique angles and transforming imagination into something real and engaging.",
    icon: Sparkles,
  },
  {
    title: "Collaboration",
    description:
      "I can work closely with others to share ideas, adapt to feedback, and keep communication open. I value teamwork and make sure every project moves smoothly toward a shared goal.",
    icon: Users,
  },
];

export const softSkills: Highlight[] = [
  {
    title: "Collaboration",
    description:
        "Works best in fast-moving, cross-functional teams, always open to feedback, brainstorming, and building momentum together.",  },
  {
    title: "Leadership",
    description:
      "Drives projects forward with clear direction and energy, keeps goals realistic, teammates motivated, and results delivered.",
  },
  {
    title: "Communication",
    description:
      "Keeps everyone aligned with transparent updates, quick syncs, and demo-driven progress that speaks for itself.",
  },
  {
    title: "Responsibility",
    description:
      "Takes ownership from kickoff to launch, balancing speed, quality, and impact to get things shipped right.",
  },
  {
    title: "Adaptability",
    description:
      "Thrives in change, adjusts fast, learns faster, and turns shifting requirements into creative opportunities.",
  },
  {
    title: "Problem Solving",
    description:
      "Turns complexity into clarity, breaking big challenges into smart, executable steps that move projects forward.",
  },
];

export const languages: Highlight[] = [
  {
    title: "Thai",
    description:
      "Native speaker with strong cultural fluency and experience adapting content for local audiences.",
  },
  {
    title: "English",
    description:
      "Professional working proficiency (TOEIC 750), fluent in collaboration, documentation, and stakeholder communication.",
  },
  {
    title: "Mandarin",
    description:
      "Beginner level, currently studying and building everyday vocabulary for cross-cultural connection.",
  },
];

export const programmingSkills: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "PHP",
        "HTML",
        "CSS",
        "JSON",
        "SQL",
      ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
        "React",
        "React Native",
        "Node.js",
        "Next.js",
        "FastAPI",
        "Phaser",
        "Pygame",
      ],
  },
  {
    category: "Design & Collaboration",
    skills: ["Figma", "shadcn/ui", "Microsoft Office Suite"],
  },
];

export const tooling: SkillGroup[] = [
  {
    category: "Platforms & Databases",
    skills: ["MySQL", "Firebase", "RESTful APIs"],
  },
  {
    category: "Dev Tooling",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
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
    category: "code",
    date: "2024-04-12",
  },
  {
    title: "Driveflow",
    subtitle: "Automotive event microsite",
    description:
      "Immersive landing page with cinematic imagery, fluid motion, and event booking flows.",
    image: "/projects/project-2.svg",
    href: "#",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    category: "organize",
    date: "2025-02-28",
  },
  {
    title: "Aura UI Kit",
    subtitle: "Component system for multi-brand SaaS",
    description:
      "Accessible shadcn/ui extension with tokens, theming utilities, and Storybook documentation.",
    image: "/projects/project-3.svg",
    href: "#",
    tags: ["Design Systems", "shadcn/ui", "Storybook"],
    category: "code",
    date: "2023-11-05",
  },
  {
    title: "Nomad Atlas",
    subtitle: "Travel planning progressive web app",
    description:
      "Offline-first itinerary builder with geo search, Contentlayer data, and push notifications.",
    image: "/projects/project-4.svg",
    href: "#",
    tags: ["PWA", "Next.js", "Mapbox"],
    category: "competition",
    date: "2023-07-18",
  },
  {
    title: "Studio Kanomtian",
    subtitle: "Creative studio showcase",
    description:
      "Story-driven narrative with MDX-powered case studies and cinematic scroll interactions.",
    image: "/projects/project-5.svg",
    href: "#",
    tags: ["MDX", "Contentlayer", "Design"],
    category: "internship",
    date: "2023-04-03",
  },
  {
    title: "InSeason",
    subtitle: "Farm-to-table marketplace",
    description:
      "Commerce prototype featuring realtime inventory, Sanity CMS, and Plausible analytics dashboards.",
    image: "/projects/project-6.svg",
    href: "#",
    tags: ["Next.js", "Sanity", "Plausible"],
    category: "code",
    date: "2022-12-12",
  },
];