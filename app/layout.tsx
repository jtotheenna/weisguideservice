import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weis Guide Service",
  description: "Guided fishing trips with experience you can trust",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
