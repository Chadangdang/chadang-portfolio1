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
  
  export const projects: Project[] = [
    {
      slug: "bookstore-app",
      title: "BookstoreApp",
      subtitle: "Cross-platform bookstore experience",
      summary:
        "Expo and Firebase-powered mobile app that delivers curated recommendations, realtime inventory, and secure checkout across devices.",
      description: [
        "BookstoreApp is a cross-platform mobile experience built with Expo (React Native + TypeScript) for DES427 Mobile Application Programming.",
        "The app features Firebase Authentication for secure sign-up, multi-criteria search across title, author, publisher, and ISBN, plus personalized recommendations surfaced through curated collections.",
        "A realtime cart ties directly to Firestore to validate stock, sync order history, and keep profiles up to date whether shoppers are on web or mobile via Vercel and Expo Go deployments.",
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
      category: "code",
      date: "2025-05-15",
    },
  ];  