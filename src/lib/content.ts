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

export type ProjectGalleryImage = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string[];
  gallery: ProjectGalleryImage[];
  skills: string[];
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
    slug: "eatsome",
    title: "eatsome.",
    subtitle: "Restaurant discovery with the Yelp API",
    summary:
      "Responsive discovery experience that helps hungry travelers find the best local spots with contextual filters, offline-ready browsing, and playful micro-interactions.",
    description: [
      "eatsome. is a responsive React application designed to make restaurant discovery both personal and delightful. Powered by the Yelp API, the experience curates results based on cuisine, price, rating, and proximity so people can quickly find somewhere that matches their cravings.",
      "To keep the experience feeling fast, I implemented offline caching with IndexedDB, animated state transitions with Framer Motion, and a map overlay that keeps search results contextually tied to the city grid.",
      "I led the full product flow—from API integration to UI polish—focusing on a playful tone that still feels dependable for everyday use.",
    ],
    gallery: [
      { src: "/projects/project-1-1.svg", alt: "eatsome. home screen" },
      { src: "/projects/project-1-2.svg", alt: "eatsome. filtered results" },
      { src: "/projects/project-1-3.svg", alt: "eatsome. restaurant detail view" },
    ],
    skills: ["React", "TypeScript", "Yelp API", "IndexedDB", "Framer Motion"],
    category: "code",
    date: "2024-04-12",
  },
  {
    slug: "driveflow",
    title: "Driveflow",
    subtitle: "Automotive event microsite",
    summary:
      "Immersive landing page that captures the spirit of a supercar rally with cinematic imagery, fluid scroll choreography, and streamlined booking flows.",
    description: [
      "Driveflow is a high-energy microsite built with Next.js to promote a limited-capacity automotive rally. The story unfolds through layered parallax imagery, dynamic typography, and hero videos that set the mood before any copy appears.",
      "A custom event booking form ties into Firebase, handling availability windows and sending confirmation flows without breaking the narrative rhythm of the page.",
      "My role covered narrative structure, art direction, and front-end implementation to deliver an experience that feels as premium as the cars it showcases.",
    ],
    gallery: [
      { src: "/projects/project-2-1.svg", alt: "Driveflow landing hero" },
      { src: "/projects/project-2-2.svg", alt: "Driveflow event schedule" },
      { src: "/projects/project-2-3.svg", alt: "Driveflow booking form" },
    ],
    skills: ["Next.js", "Framer Motion", "Tailwind CSS", "Firebase", "Parallax Design"],
    category: "organize",
    date: "2025-02-28",
  },
  {
    slug: "aura-ui-kit",
    title: "Aura UI Kit",
    subtitle: "Component system for multi-brand SaaS",
    summary:
      "Accessible component library that scales across multiple product brands with shared tokens, theming utilities, and Storybook-driven documentation.",
    description: [
      "Aura UI Kit is a design system extension that sits on top of shadcn/ui to support a suite of SaaS products operating under one umbrella brand.",
      "I built the library with TypeScript, created design tokens for color, spacing, and motion, and wired everything into Storybook so product teams can test variations in isolation.",
      "The result is a flexible component kit that keeps brand expression consistent while still giving teams room to adapt layouts for their own audiences.",
    ],
    gallery: [
      { src: "/projects/project-3-1.svg", alt: "Aura UI dashboard components" },
      { src: "/projects/project-3-2.svg", alt: "Aura UI form layouts" },
      { src: "/projects/project-3-3.svg", alt: "Aura UI Storybook preview" },
    ],
    skills: ["Design Systems", "shadcn/ui", "Storybook", "TypeScript", "Design Tokens"],
    category: "code",
    date: "2023-11-05",
  },
  {
    slug: "nomad-atlas",
    title: "Nomad Atlas",
    subtitle: "Travel planning progressive web app",
    summary:
      "Offline-first travel planner that stitches together geo search, saved itineraries, and push reminders for on-the-go explorers.",
    description: [
      "Nomad Atlas is a progressive web app crafted for travelers who want curated itineraries that still adapt in real time.",
      "Using Mapbox for geospatial search and Contentlayer for editorial content, I built a flexible planner that stores trips locally and syncs when the connection comes back.",
      "Push notifications nudge travelers about reservations, while shareable day plans keep everyone aligned when plans change mid-journey.",
    ],
    gallery: [
      { src: "/projects/project-4-1.svg", alt: "Nomad Atlas itinerary overview" },
      { src: "/projects/project-4-2.svg", alt: "Nomad Atlas map search" },
      { src: "/projects/project-4-3.svg", alt: "Nomad Atlas offline mode" },
    ],
    skills: ["PWA", "Next.js", "Mapbox", "Contentlayer", "Push Notifications"],
    category: "competition",
    date: "2023-07-18",
  },
  {
    slug: "studio-kanomtian",
    title: "Studio Kanomtian",
    subtitle: "Creative studio showcase",
    summary:
      "Story-driven studio site with MDX-powered case studies, cinematic scroll cues, and tactile hover states that highlight each collaboration.",
    description: [
      "Studio Kanomtian is a narrative-driven website where each scroll reveals a new collaboration story.",
      "Case studies are authored in MDX, giving writers control over pacing while the layout automatically adapts to different media types.",
      "I focused on crafting tactile interactions—hover-triggered spotlights, gentle parallax, and type that feels editorial yet approachable.",
    ],
    gallery: [
      { src: "/projects/project-5-1.svg", alt: "Studio Kanomtian homepage" },
      { src: "/projects/project-5-2.svg", alt: "Studio Kanomtian case study" },
      { src: "/projects/project-5-3.svg", alt: "Studio Kanomtian collaborators" },
    ],
    skills: ["MDX", "Contentlayer", "Design", "Interactive Storytelling", "Scroll-based Animation"],
    category: "internship",
    date: "2023-04-03",
  },
  {
    slug: "inseason",
    title: "InSeason",
    subtitle: "Farm-to-table marketplace",
    summary:
      "Marketplace prototype connecting growers and chefs with real-time inventory, seasonal storytelling, and actionable analytics dashboards.",
    description: [
      "InSeason is a commerce concept that surfaces what local farmers have available right now and helps restaurants plan menus around those ingredients.",
      "I built the storefront with Next.js and Sanity CMS, enabling producers to update stock levels from the field and instantly reflect changes on the buyer side.",
      "An analytics view powered by Plausible helps partners understand demand trends so they can coordinate harvest and delivery schedules more efficiently.",
    ],
    gallery: [
      { src: "/projects/project-6-1.svg", alt: "InSeason product listings" },
      { src: "/projects/project-6-2.svg", alt: "InSeason producer dashboard" },
      { src: "/projects/project-6-3.svg", alt: "InSeason analytics view" },
    ],
    skills: ["Next.js", "Sanity", "Plausible", "Commerce UX", "Realtime Inventory"],
    category: "code",
    date: "2022-12-12",
  },
];