"use client";

import Image from "next/image";
import SectionEyebrow from "./SectionEyebrow";
import { useLanguage } from "../../i18n/LanguageProvider";

// Hrefs live in code; the labels come from the dictionary and are paired by
// index (same order in both languages).
const QUICK_HREFS = ["#hero", "#why-choose-us", "#trainers-gallery", "#pricing"];
const MAPS_URL = "https://maps.app.goo.gl/TPBH4abruK9srHEK6";
const CONTACT_HREFS = ["tel:+8562093460645", MAPS_URL, MAPS_URL];
const HOURS_HREFS = ["#footer", "#footer"];

export default function Footer() {
  const { t } = useLanguage();

  const columns = [
    { title: t.footer.colQuick, labels: t.footer.quick, hrefs: QUICK_HREFS },
    { title: t.footer.colContact, labels: t.footer.contact, hrefs: CONTACT_HREFS },
    { title: t.footer.colHours, labels: t.footer.hours, hrefs: HOURS_HREFS },
  ];

  return (
    <footer id="footer" className="section footer">
      <div className="footer__cta">
        <div className="footer__cta-bg" aria-hidden="true" />
        <div className="container footer__cta-content">
          <SectionEyebrow>{t.footer.ctaEyebrow}</SectionEyebrow>
          <p className="footer__cta-title">{t.footer.ctaTitle}</p>
          <a className="footer__phone" href="tel:+8562093460645">
            020 93 460 645
          </a>
        </div>
      </div>

      <div className="container footer__cols">
        <div className="footer__brand">
          <a className="logo" href="#hero">
            <Image
              src="/images/logo.png"
              alt="Sengdara Fitness Km6"
              width={2398}
              height={1792}
              className="logo__img"
            />
          </a>
          <p className="footer__tagline">{t.footer.tagline}</p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook">
              <svg width="9" height="18" viewBox="0 0 9 19" fill="none">
                <path d="M9 6.3H6.6V4.7c0-.6.4-.8 1-.8h1.9V.1L6.6.1C3.9.1 3 1.5 3 3.8V6.3H1v3.7h2V19h3.6V10h2.4L9 6.3z" fill="white" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
                <path
                  d="M18.5 2.1c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.3.9C15 .6 14 .1 12.9.1c-2.1 0-3.7 1.7-3.7 3.7 0 .3 0 .6.1.8-3.1-.2-5.8-1.6-7.6-3.9C1.4 1.2 1.2 1.9 1.2 2.6c0 1.3.6 2.4 1.6 3.1-.6 0-1.2-.2-1.7-.4v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6-1.3 1-3 1.6-4.7 1.6H.5c1.7 1.1 3.7 1.7 5.9 1.7 7 0 10.9-5.8 10.9-10.9v-.5c.8-.5 1.4-1.2 2-2z"
                  fill="white"
                />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="1" width="16" height="16" rx="4.5" stroke="white" strokeWidth="1.6" />
                <circle cx="9" cy="9" r="4" stroke="white" strokeWidth="1.6" />
                <circle cx="13.6" cy="4.4" r="1" fill="white" />
              </svg>
            </a>
          </div>
        </div>

        {columns.map((col, i) => (
          <div className="footer__links" key={i}>
            <p className="footer__col-title">{col.title}</p>
            {col.labels.map((label, j) => (
              <a href={col.hrefs[j]} key={j}>
                {label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="container">
        <p className="footer__wordmark" aria-hidden="true">SENGDARA</p>
      </div>

      <p className="footer__bottom">{t.footer.copyright}</p>
    </footer>
  );
}
