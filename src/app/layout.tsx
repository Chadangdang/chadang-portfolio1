import type { Metadata } from "next";
import { Montserrat, Open_Sans, Raleway } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chadang.dev"),
  title: {
    default: "Chadang Phummarin — Portfolio",
    template: "%s | Chadang Phummarin",
  },
  description:
    "Discover the work of Chadang Phummarin: developer, designer, and problem solver crafting thoughtful digital products.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Chadang Phummarin — Portfolio",
    description:
      "Discover the work of Chadang Phummarin: developer, designer, and problem solver crafting thoughtful digital products.",
    type: "website",
    url: "https://chadang.dev",
    siteName: "Chadang Phummarin",
    images: [{
      url: "/projects/project-1.svg",
      width: 640,
      height: 400,
      alt: "Abstract gradient tile for Chadang Phummarin's portfolio",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chadang Phummarin — Portfolio",
    description:
      "Developer and designer crafting thoughtful experiences with Next.js, TypeScript, and modern tooling.",
    creator: "@kanomtian",
    images: ["/projects/project-1.svg"],
  },
  icons: {
    icon: "/icons/icon-192.svg",
    shortcut: "/icons/icon-192.svg",
    apple: "/icons/icon-192.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${raleway.variable} ${montserrat.variable} ${openSans.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
