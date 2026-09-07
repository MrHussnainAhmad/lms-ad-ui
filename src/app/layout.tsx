import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  preload: true,
  variable: "--font-inter",
  display: "swap",
});

const bricolage = localFont({
  src: "./fonts/bricolage-latin.woff2",
  weight: "200 800",
  preload: true,
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nisaab360 | School Management, Connected",
  description:
    "Manage administration, academics, attendance, fees and parent communication in one connected school platform.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolage.variable}`}>{children}</body>
    </html>
  );
}
