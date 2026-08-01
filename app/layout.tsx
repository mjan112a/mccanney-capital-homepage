import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") || requestHeaders.get("host") || "mccanneycapital.com";
  const protocol = requestHeaders.get("x-forwarded-proto") || (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const socialImage = new URL("/og.png", base).toString();
  return {
    metadataBase: base,
    title: { default: "McCanney Capital | Numbers first. Pressure never.", template: "%s | McCanney Capital" },
    description: "Retirement income, annuity review, life insurance, and long-term care strategy in Columbus, Ohio—answers first, math visible, pressure never.",
    openGraph: {
      title: "McCanney Capital",
      description: "You don’t need another pitch. You need an answer.",
      type: "website",
      images: [{ url: socialImage, width: 1536, height: 1024, alt: "McCanney Capital — Numbers first. Pressure never." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "McCanney Capital",
      description: "Numbers first. Pressure never.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
