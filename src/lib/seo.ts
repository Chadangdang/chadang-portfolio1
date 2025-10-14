import type { DefaultSeoProps } from "next-seo";

export const seoConfig: DefaultSeoProps = {
  defaultTitle: "Chadang Phummarin — Portfolio",
  titleTemplate: "%s | Chadang Phummarin",
  description:
    "Next.js portfolio that highlights services, selected projects, and ways to collaborate with Chadang Phummarin.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chadang.dev",
    siteName: "Chadang Phummarin",
    images: [
      {
        url: "/projects/project-2.svg",
        width: 640,
        height: 400,
        alt: "Chadang Phummarin portfolio preview",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@kanomtian",
    site: "@kanomtian",
  },
  additionalMetaTags: [
    {
      name: "theme-color",
      content: "#CBA693",
    },
    {
      name: "color-scheme",
      content: "light",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/icons/icon-192.svg",
      type: "image/svg+xml",
    },
  ],
};