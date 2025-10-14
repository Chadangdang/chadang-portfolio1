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
