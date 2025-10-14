export type ProjectGalleryImage = {
  src: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  description: string[];
  gallery: ProjectGalleryImage[];
  skills: string[];
  links?: ProjectLink[];
  category: "code" | "organize" | "internship" | "competition";
  date: string;
};

export const projects: Project[] = [
  {
    slug: "bookstore-app",
    title: "BookstoreApp",
    subtitle: "A cross-platform bookstore app for browsing, purchasing, and managing books in real time.",
    summary:
      "Cross-platform bookstore app built with Expo and Firebase, offering curated book recommendations, real-time stock updates, and secure checkout across devices.",
    description: [
      "BookstoreApp is a cross-platform mobile and web bookstore built using Expo (React Native + TypeScript) and Firebase. The project aims to deliver a seamless reading and shopping experience for users through a modern, responsive, and data-driven interface.",
      "The app provides a complete bookstore flow, from discovering new releases to securely purchasing and reviewing past orders. With Firebase Auth, users can easily sign up or log in to their personal accounts. The Home Screen features swipeable promotional banners and curated recommendations such as 'This Month’s Must-Reads.'",
      "A powerful search engine enables users to find books by title, author, publisher, or ISBN, while the catalog presents detailed book information, including availability and stock levels. The Cart System, managed through React Context API, allows users to add, update, or remove items with automatic validation to prevent stock overflow.",
      "During checkout, real-time updates ensure Firestore inventory remains consistent. The Order History page lets users review their past purchases with complete details, while the Profile section centralizes account and logout options.",
      "**Architecture & Tech Stack**",
      "- Frontend: Expo (React Native + TypeScript), React Navigation (native-stack), React Context API (Cart), custom UI components, Bodoni Moda font (@expo-google-fonts/bodoni-moda)",
      "- Backend: Firebase Firestore (NoSQL) for data storage, Firebase Auth for user management",
      "- Deployment: Web via Vercel (Live Demo), Mobile via Expo Go / Custom Dev Client",
      "With its responsive design and real-time Firebase integration, BookstoreApp showcases how mobile application technologies can create an intuitive, secure, and connected digital shopping experience.",
    ],
    gallery: [
      { src: "/projects/bookstoreapp/bookstoreapp1.jpeg", alt: "BookstoreApp onboarding screens" },
      { src: "/projects/bookstoreapp/bookstoreapp2.jpeg", alt: "BookstoreApp book discovery feed" },
      { src: "/projects/bookstoreapp/bookstoreapp3.jpeg", alt: "BookstoreApp search results" },
      { src: "/projects/bookstoreapp/bookstoreapp4.jpeg", alt: "BookstoreApp checkout and order history" },
    ],
    skills: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase (Firestore & Auth)",
      "Context API",
      "UI/UX",
      "Version Control (Git/GitHub)",
      "Web Deployment (Vercel)",
    ],
    links: [
      { label: "GitHub Repo", href: "https://github.com/Chadangdang/BookstoreApp" },
      { label: "Live Demo", href: "https://bookstore-app-mocha.vercel.app/" },
    ],
    category: "code",
    date: "2025-05-15",
  },
];