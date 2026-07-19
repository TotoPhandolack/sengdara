import SectionEyebrow from "./SectionEyebrow";

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
  return (
    <section id="reviews" className="section reviews">
      <div className="container reviews__inner">
        <div className="section-heading">
          <div className="section-heading__top">
            <SectionEyebrow>Reviews</SectionEyebrow>
            <h2>4.7★ from 62 members</h2>
          </div>
          <a
            href="https://maps.app.goo.gl/TPBH4abruK9srHEK6"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--dark"
          >
            Leave a Review
          </a>
        </div>

        <div className="reviews__grid">
          {REVIEWS.map((r) => (
            <article className="review-card" key={r.name}>
              <div className="review-card__avatar" aria-hidden="true">
                {r.initials}
              </div>
              <div className="review-card__stars">★★★★★</div>
              <p className="review-card__quote">{r.quote}</p>
              <div className="review-card__foot">
                <p className="review-card__name">{r.name}</p>
                <p className="review-card__time">{r.timeAgo} · Google review</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
