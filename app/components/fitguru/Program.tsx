"use client";

import { sengdaraPhoto } from "./sengdara-photos";
import SectionEyebrow from "./SectionEyebrow";
import { useLanguage } from "../../i18n/LanguageProvider";

export default function Program() {
  const { t } = useLanguage();

  return (
    <section id="program" className="section program">
      <div className="container program__inner">
        <div className="program__photos">
          <img
            className="program__photo-tall"
            src={sengdaraPhoto("elevatedTrack", 400, 615)}
            alt="Sengdara Fitness elevated running track"
            loading="lazy"
          />
          <img
            className="program__photo-square"
            src={sengdaraPhoto("cardioFloor", 615, 615)}
            alt="Sengdara Fitness cardio floor"
            loading="lazy"
          />
        </div>
        <div className="program__text">
          <div>
            <SectionEyebrow>{t.program.eyebrow}</SectionEyebrow>
            <h2>{t.program.heading}</h2>
          </div>
          <p className="body-lg">{t.program.body}</p>
          <a href="#trainers-gallery" className="btn btn--dark">
            {t.program.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
