"use client";

import { useLanguage } from "../../i18n/LanguageProvider";

export default function Stats() {
  const { t } = useLanguage();

  // Values are real figures from the Google Business Profile — kept as-is in
  // both languages; only the labels are localized.
  const stats: { label: string; value: string; white?: boolean }[] = [
    { label: t.stats.googleRating, value: "4.7★" },
    { label: t.stats.memberReviews, value: "62+" },
    { label: t.stats.gymEquipment, value: "Precor" },
    { label: t.stats.openUntil, value: "10 PM", white: true },
  ];

  return (
    <section id="stats" className="section stats">
      <div className="container stats__row">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className={`stat__label ${stat.white ? "stat__label--white" : ""}`}>
              {stat.label}
            </span>
            <span className="stat__value">{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
