"use client";

import { sengdaraPhoto } from "./sengdara-photos";
import SectionEyebrow from "./SectionEyebrow";
import CornerArrow from "./CornerArrow";
import { useLanguage } from "../../i18n/LanguageProvider";

// Icons stay in code and are matched to feature copy by index; the text itself
// comes from the translation dictionary.
const ICONS = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
    <path d="M3 12h2m14 0h2M7 8v8m10-8v8M7 12h10" />
  </svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
    <circle cx="12" cy="8" r="5" />
    <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="12" r="3" />
    <path d="M9 12h6" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
    <rect x="2" y="10" width="20" height="4" rx="2" />
  </svg>,
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-choose-us" className="section why">
      <div className="container why__inner">
        <div className="section-heading">
          <div className="section-heading__top">
            <SectionEyebrow>{t.why.eyebrow}</SectionEyebrow>
            <h2>{t.why.heading}</h2>
          </div>
          <p className="section-heading__desc">{t.why.desc}</p>
        </div>

        <div className="why__content">
          <div className="why__features">
            {t.why.features.map((f, i) => (
              <div className="feature" key={i}>
                <span className="feature__icon">{ICONS[i]}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="why__gallery">
            <div className="why__gallery-tall">
              <img
                src={sengdaraPhoto("interiorTwoLevel", 570, 820)}
                alt="Sengdara Fitness two-level equipment floor"
                loading="lazy"
              />
              <CornerArrow />
            </div>
            <div className="why__gallery-stack">
              <div>
                <img
                  src={sengdaraPhoto("boxingArea", 530, 384)}
                  alt="Sengdara Fitness boxing and functional training area"
                  loading="lazy"
                />
                <CornerArrow />
              </div>
              <div>
                <img
                  src={sengdaraPhoto("memberCableMachine", 530, 384)}
                  alt="Sengdara Fitness member training on a cable machine"
                  loading="lazy"
                />
                <CornerArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
