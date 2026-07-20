"use client";

import SectionEyebrow from "./SectionEyebrow";
import { useLanguage } from "../../i18n/LanguageProvider";

// Google Business Profiles don't expose membership pricing, so real figures
// aren't available here. Rather than invent prices, each plan links to a real
// contact method (call) so visitors get an accurate quote. The middle plan is
// highlighted as the popular option.
const FEATURED_INDEX = 1;

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="section pricing">
      <div className="container pricing__inner">
        <div className="section-heading">
          <div className="section-heading__top">
            <SectionEyebrow>{t.pricing.eyebrow}</SectionEyebrow>
            <h2>{t.pricing.heading}</h2>
          </div>
          <p className="section-heading__desc">{t.pricing.desc}</p>
        </div>

        <div className="pricing__cards">
          {t.pricing.plans.map((plan, i) => (
            <article className="price-card" key={i}>
              <div className="price-card__body">
                <div className="price-card__head">
                  <div className="price-card__name-row">
                    <p className="price-card__name">{plan.name}</p>
                    {i === FEATURED_INDEX && (
                      <span className="price-card__badge">{t.pricing.popular}</span>
                    )}
                  </div>
                  <div className="price-card__price">
                    <span className="amount" style={{ fontSize: 24 }}>
                      {t.pricing.contactForPricing}
                    </span>
                  </div>
                </div>
                <p className="price-card__desc">{plan.desc}</p>
                <div className="price-card__divider" />
                <ul className="price-card__list">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className="tick">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="tel:+8562093460645" className="btn btn--dark btn--block">
                {t.pricing.callToJoin}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
