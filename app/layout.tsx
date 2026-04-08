import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://weisguideservice.com"),
  title: "Weis Guide Service | Guided Fishing Trips in Peterson, Minnesota",
  description:
    "Guided fly fishing and trout trips on the Driftless streams of southeastern Minnesota. Half day, full day, and beginner-friendly trips. Book with Weis Guide Service.",
  openGraph: {
    title: "Weis Guide Service | Guided Fishing Trips in Peterson, MN",
    description:
      "Guided fly fishing and trout trips on the Driftless streams of southeastern Minnesota. Half day, full day, and beginner-friendly trips.",
    url: "https://weisguideservice.com",
    siteName: "Weis Guide Service",
    images: [
      {
        url: "/minnesota-driftless-trout-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Guided trout fishing on the Driftless streams of Minnesota",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Weis Guide Service | Guided Fishing Trips in Peterson, MN",
    description:
      "Guided fly fishing and trout trips on the Driftless streams of southeastern Minnesota.",
    images: ["/minnesota-driftless-trout-guide.jpg"],
  },
  alternates: {
    canonical: "https://weisguideservice.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}