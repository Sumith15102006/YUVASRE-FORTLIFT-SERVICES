import type { Metadata, Viewport } from "next";
import "./globals.css";
import { business } from "@/content/business";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Electric Forklifts & Material Handling in ${business.location}`,
    template: `%s | ${business.shortName}`,
  },
  description: business.heroDescription,
  openGraph: {
    title: `${business.name} | Material Handling Equipment`,
    description: business.heroDescription,
    url: business.siteUrl,
    siteName: business.name,
    type: "website",
    images: [{ url: business.heroImage, alt: business.heroImageAlt }],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#142d27",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
