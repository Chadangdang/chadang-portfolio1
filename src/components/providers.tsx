"use client";

import type { ReactNode } from "react";
import Script from "next/script";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        data-domain="chadang.dev"
        src="https://plausible.io/js/script.js"
      />
      {children}
    </>
  );
}