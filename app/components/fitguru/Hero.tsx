"use client";

import NavBar from "./NavBar";
import HeroBackground from "./HeroBackground";
import { useLanguage } from "../../i18n/LanguageProvider";

export default function Hero({ images }: { images: string[] }) {
  const { t } = useLanguage();

  return (
    <section id="hero" className="section hero">
      <HeroBackground images={images} />
      <div className="hero__bg" aria-hidden="true" />

      <NavBar />

      <div className="container hero__content">
        {/* Brand wordmark — kept in Latin in both languages, like the logo. */}
        <h1 className="hero__title">
          SengDara
          <br />
          <span className="accent">Fitness</span>
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>
        <div className="hero__actions">
          <a href="#pricing" className="btn btn--primary">
            {t.hero.getStarted}
          </a>
          <a href="#trainers-gallery" className="link-arrow">
            {t.hero.takeTour}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H4M11 3V10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="hero__proof">
          <div className="hero__proof-avatars" aria-hidden="true">
            <span>NK</span>
            <span>ML</span>
            <span>PC</span>
          </div>
          <p className="hero__proof-text">
            <strong>4.7★</strong> {t.hero.proofText}
          </p>
        </div>
      </div>

      <div className="hero__wave" aria-hidden="true">
        <svg viewBox="0 0 2880 80" preserveAspectRatio="none">
          <path
            className="hero__wave-fill"
            d="M0 40 C60 4 120 4 180 40 S300 76 360 40 S480 4 540 40 S660 76 720 40 S840 4 900 40 S1020 76 1080 40 S1200 4 1260 40 S1380 76 1440 40 S1560 4 1620 40 S1740 76 1800 40 S1920 4 1980 40 S2100 76 2160 40 S2280 4 2340 40 S2460 76 2520 40 S2640 4 2700 40 S2820 76 2880 40 V80 H0 Z"
          />
          <path
            className="hero__wave-line"
            d="M0 40 C60 4 120 4 180 40 S300 76 360 40 S480 4 540 40 S660 76 720 40 S840 4 900 40 S1020 76 1080 40 S1200 4 1260 40 S1380 76 1440 40 S1560 4 1620 40 S1740 76 1800 40 S1920 4 1980 40 S2100 76 2160 40 S2280 4 2340 40 S2460 76 2520 40 S2640 4 2700 40 S2820 76 2880 40"
          />
        </svg>
      </div>
    </section>
  );
}
