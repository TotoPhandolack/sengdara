"use client";

import { useRef } from "react";

const REVIEWS = [
  {
    name: "Kerry Rohan",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Kerry Rohan",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Kerry Rohan",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
            <h2 className="uppercase">Your Opinions</h2>
          </div>
          <a href="#" className="btn btn--dark">
            +&nbsp;&nbsp;Your Opinions
          </a>
        </div>

        <div className="reviews__content">
          <div className="reviews__avatars" aria-hidden="true">
            <img src="https://picsum.photos/seed/fitguru-av1/160/160" alt="" />
            <img src="https://picsum.photos/seed/fitguru-av2/150/150" alt="" />
            <img src="https://picsum.photos/seed/fitguru-av3/180/180" alt="" />
            <img src="https://picsum.photos/seed/fitguru-av4/120/120" alt="" />
          </div>

          <div className="reviews__carousel-wrap">
            <div className="reviews__track" ref={trackRef}>
              {REVIEWS.map((r, i) => (
                <article className="review-card" key={i}>
                  <p className="review-card__name">{r.name}</p>
                  <div className="review-card__stars">
                    ★★★★<span className="dim">★</span>
                  </div>
                  <p className="review-card__quote">{r.quote}</p>
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
