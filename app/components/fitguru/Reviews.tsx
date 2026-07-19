"use client";

import { useEffect, useRef, useState } from "react";
import SectionEyebrow from "./SectionEyebrow";
import { sengdaraReviews } from "./sengdara-reviews";

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(0);

  // Derive page count / active page from the real scroll geometry, so it stays
  // correct as the visible column count changes across breakpoints.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const pages = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
      const current = Math.round(el.scrollLeft / el.clientWidth);
      setPageCount(pages);
      setPage(Math.min(Math.max(current, 0), pages - 1));
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const goTo = (p: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: p * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section id="reviews" className="section reviews">
      <div className="container reviews__inner">
        <div className="section-heading">
          <div className="section-heading__top">
            <SectionEyebrow>Reviews</SectionEyebrow>
            <h2>What members say</h2>
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

        <div className="reviews__track" ref={trackRef}>
          {sengdaraReviews.map((r, i) => (
            <article className="review-card" key={i}>
              <div className="review-card__avatar" aria-hidden="true">
                {r.initials}
              </div>
              <div className="review-card__stars" aria-label="Rated 5 out of 5">
                ★★★★★
              </div>
              <p className="review-card__quote">{r.quote}</p>
              <div className="review-card__foot">
                <p className="review-card__name">{r.name}</p>
                <p className="review-card__time">{r.timeAgo} · Google review</p>
              </div>
            </article>
          ))}
        </div>

        <div className="reviews__controls">
          <div className="reviews__dots" role="tablist" aria-label="Review pages">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`reviews__dot ${i === page ? "active" : ""}`}
                aria-label={`Go to review page ${i + 1}`}
                aria-current={i === page}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <div className="reviews__arrows">
            <button
              type="button"
              aria-label="Previous reviews"
              disabled={page <= 0}
              onClick={() => goTo(page - 1)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 3.5L5.5 9l5.5 5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              disabled={page >= pageCount - 1}
              onClick={() => goTo(page + 1)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 3.5L12.5 9 7 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
