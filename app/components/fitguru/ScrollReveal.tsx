"use client";

import { useEffect } from "react";

// Progressive-enhancement scroll reveal. It tags a curated set of elements with
// [data-reveal] at runtime (so the markup stays clean and works with JS off),
// flags the root so the hidden state only applies once JS is ready, then fades
// each element in as it enters the viewport. Honors prefers-reduced-motion via
// CSS — the reveal styles collapse to "visible" under that query.
const GROUPS: { selector: string; stagger?: boolean }[] = [
  { selector: ".hero__content" },
  { selector: ".stats .stat", stagger: true },
  { selector: ".section-heading" },
  { selector: ".why__features .feature", stagger: true },
  { selector: ".why__gallery" },
  { selector: ".program__photos" },
  { selector: ".program__text" },
  { selector: ".trainers__row", stagger: true },
  { selector: ".pricing__cards .price-card", stagger: true },
  { selector: ".reviews__content" },
  { selector: ".footer__cta-content" },
  { selector: ".footer__cols" },
];

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".fitguru-site");
    if (!root) return;

    const targets: HTMLElement[] = [];
    GROUPS.forEach(({ selector, stagger }) => {
      root.querySelectorAll<HTMLElement>(selector).forEach((el, i) => {
        el.setAttribute("data-reveal", "");
        if (stagger) el.style.transitionDelay = `${Math.min(i, 6) * 80}ms`;
        targets.push(el);
      });
    });

    // Only hide elements now that we know JS is running and will reveal them.
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
