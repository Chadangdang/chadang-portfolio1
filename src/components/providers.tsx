"use client";

import type { ReactNode } from "react";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { seoConfig } from "@/lib/seo";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Script
        strategy="lazyOnload"
        data-domain="chadang.dev"
        src="https://plausible.io/js/script.js"
      />
      {children}
    </>
  );
}