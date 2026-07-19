import type { Metadata } from "next";
import { Geist, Geist_Mono, Archivo, Inter } from "next/font/google";
import "./globals.css";
import "./fitguru.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Body copy — clean editorial grotesk
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Display headings — heavy geometric grotesk, editorial/premium rather than collegiate
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sengdara Fitness Km6 | Vientiane's 4.7★ Gym",
  description:
    "Sengdara Fitness Km6 in Vientiane, Laos — premium Precor equipment, a full swimming pool, sauna, and boxing area. Rated 4.7 out of 5 by 62 members on Google.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
