import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const description =
  "Jovanny (Vanny) De Leon — full-stack web and bot developer from Camarines Sur, Philippines. Master of EdTech Innovation awardee; competed in the ASEAN AI Hackathon 2026, CCS One Up Hackathon and SparkLAB Hackathon. React, Node.js, MongoDB.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vanny-portfolio.vercel.app"),
  title: "VannyDev",
  description,
  applicationName: "VannyDev",
  authors: [{ name: "Jovanny De Leon" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/logo/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Vanny De Leon — Full-stack Web & Bot Developer",
    description:
      "Full-stack developer, hackathon competitor and Master of EdTech Innovation awardee.",
    images: ["/assets/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vanny De Leon — Full-stack Web & Bot Developer",
    description:
      "Full-stack developer, hackathon competitor and Master of EdTech Innovation awardee.",
    images: ["/assets/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#030912",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="enable-reveal-animations" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js');"}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://kit.fontawesome.com/0e939e26e7.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
