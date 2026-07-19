"use client";

import { useRef } from "react";

// Real reviews from the Sengdara Fitness Km6 Google Business Profile (4.7★, 62 reviews).
// Thai-language reviews are translated to English below; original text preserved in `original`.
const REVIEWS = [
  {
    name: "Namnueng Kvs",
    initials: "NK",
    timeAgo: "1 month ago",
    quote:
      "My favorite gym, hands down — 5 stars, no deductions! I was nervous at first since I'd just started working out, but this place put me completely at ease. The trainers are incredibly kind, always walking the floor to spot you and teach proper form.",
    original:
      "ยิมในดวงใจเลยค่ะ ให้ 5 ดาวแบบไม่หัก! ตอนแรกตื่นสนามมากเพราะพึ่งเริ่มเข้าฟิตเนส แต่มาที่นี่แล้วสบายใจสุดๆ บรรยากาศเป็นกันเอง เทรนเนอร์ใจดีมาก คอยเดินเซฟและสอนใช้อุปกรณ์แบบไม่มีกั๊ก",
  },
  {
    name: "Mee Lutsamy",
    initials: "ML",
    timeAgo: "7 months ago",
    quote:
      "Really impressed with this gym — every kip spent here is worth it. They use Precor equipment, a premium brand: great quality, high standards, and built to last.",
    original:
      "ประทับใจฟิตเนสนี้มาก เพราะเงินที่จ่ายไปคุ้มค่ามาก ฟิตเนสนี้เลือกใช้อุปกรณ์ของProcorซึ่งเป็นแบรนด์ระดับพรีเมียม คุณภาพดี มาตรฐานสูง วัสดุดี แข็งแรง",
  },
  {
    name: "Pandacoco",
    initials: "PC",
    timeAgo: "5 months ago",
    quote:
      "Best fitness club in Vientiane I can recommend. Staff so friendly and respectful. Swimming pool and sauna are excellent. New gym equipment and the restaurant food is good. Toilets are clean. I give 5 stars for this gym.",
  },
];

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>(".review-card");
    if (!track || !card) return;
    const distance = card.getBoundingClientRect().width + 24;
    track.scrollBy({ left: direction * distance, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="section reviews">
      <div className="container reviews__inner">
        <div className="reviews__header">
          <div>
            <p className="eyebrow">Reviews</p>
            <h2 className="uppercase">4.7★ from 62 Members</h2>
          </div>
          <a
            href="https://maps.app.goo.gl/TPBH4abruK9srHEK6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--dark"
          >
            +&nbsp;&nbsp;Leave a Review
          </a>
        </div>

        <div className="reviews__content">
          <div className="reviews__avatars" aria-hidden="true">
            {REVIEWS.map((r, i) => (
              <div className={`avatar-badge avatar-badge--${i}`} key={r.name}>
                {r.initials}
              </div>
            ))}
          </div>

          <div className="reviews__carousel-wrap">
            <div className="reviews__track" ref={trackRef}>
              {REVIEWS.map((r, i) => (
                <article className="review-card" key={i}>
                  <p className="review-card__name">{r.name}</p>
                  <div className="review-card__stars">★★★★★</div>
                  <p className="review-card__quote">{r.quote}</p>
                  <p className="review-card__time">{r.timeAgo} · Google review</p>
                </article>
              ))}
            </div>
            <div className="reviews__nav">
              <button type="button" aria-label="Previous review" onClick={() => scrollByCard(-1)}>
                &#8592;
              </button>
              <button type="button" aria-label="Next review" onClick={() => scrollByCard(1)}>
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
