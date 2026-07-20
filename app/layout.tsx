import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit, Phetsarath } from "next/font/google";
import "./globals.css";
import "./fitguru.css";
import { LanguageProvider } from "./i18n/LanguageProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Latin display + body — geometric grotesk, variable weight 100–900.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

// Lao script — Phetsarath renders ພາສາລາວ. Stacked *after* Outfit so Latin
// glyphs use Outfit and only Lao characters fall through to Phetsarath.
const phetsarath = Phetsarath({
  variable: "--font-phetsarath",
  subsets: ["lao"],
  weight: ["400", "700"],
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
    // suppressHydrationWarning: tolerate attributes/nodes injected into
    // <html>/<body> by browser extensions (Grammarly, password managers, etc.)
    // so they don't trigger dev-mode hydration warnings. Only affects these two
    // tags one level deep — real mismatches in the app tree still surface.
    <html
      lang="lo"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} ${phetsarath.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
