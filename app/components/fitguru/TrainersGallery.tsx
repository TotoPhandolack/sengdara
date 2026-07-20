"use client";

import { sengdaraPhoto } from "./sengdara-photos";
import SectionEyebrow from "./SectionEyebrow";
import CornerArrow from "./CornerArrow";
import { useLanguage } from "../../i18n/LanguageProvider";

// No dedicated trainer-portrait photos were available on the Google Business
// Profile, so this section reuses the confirmed real facility shots instead
// of stock placeholders. Swap in real trainer photos here once you have them.
export default function TrainersGallery() {
  const { t } = useLanguage();

  return (
    <section id="trainers-gallery" className="section trainers">
      <div className="container trainers__inner">
        <div className="section-heading">
          <div className="section-heading__top">
            <SectionEyebrow>{t.facility.eyebrow}</SectionEyebrow>
            <h2>{t.facility.heading}</h2>
          </div>
          <p className="section-heading__desc">{t.facility.desc}</p>
        </div>

        <div className="trainers__grid">
          <div className="trainers__row">
            <figure className="w-narrow"><img src={sengdaraPhoto("memberCableMachine", 440, 576)} alt="Sengdara Fitness member training" loading="lazy" /><CornerArrow /></figure>
            <figure className="w-wide"><img src={sengdaraPhoto("interiorTwoLevel", 1150, 576)} alt="Sengdara Fitness equipment floor" loading="lazy" /><CornerArrow /></figure>
            <figure className="w-narrow"><img src={sengdaraPhoto("boxingArea", 440, 576)} alt="Sengdara Fitness boxing area" loading="lazy" /><CornerArrow /></figure>
          </div>
          <div className="trainers__row">
            <figure className="w-wide"><img src={sengdaraPhoto("elevatedTrack", 794, 576)} alt="Sengdara Fitness elevated running track" loading="lazy" /><CornerArrow /></figure>
            <figure className="w-narrow"><img src={sengdaraPhoto("cardioFloor", 440, 576)} alt="Sengdara Fitness cardio floor" loading="lazy" /><CornerArrow /></figure>
            <figure className="w-wide"><img src={sengdaraPhoto("exteriorNight", 794, 576)} alt="Sengdara Fitness building exterior" loading="lazy" /><CornerArrow /></figure>
          </div>
        </div>
      </div>
    </section>
  );
}
