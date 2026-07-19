import NavBar from "./NavBar";

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero__bg" aria-hidden="true" />

      <NavBar />

      <div className="container hero__content">
        <h1 className="hero__title">
          No&nbsp;pain,
          <br />
          no&nbsp;<span className="accent">gain</span>
        </h1>
        <p className="hero__subtitle">
          Premium Precor equipment, a full swimming pool and sauna, and trainers who actually spot
          you — Vientiane&apos;s highest-rated gym at Km6.
        </p>
        <div className="hero__actions">
          <a href="#pricing" className="btn btn--primary">
            Get Started
          </a>
          <a href="#trainers-gallery" className="link-arrow">
            Take a tour
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 11L11 3M11 3H4M11 3V10"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="hero__proof">
          <div className="hero__proof-avatars" aria-hidden="true">
            <span>NK</span>
            <span>ML</span>
            <span>PC</span>
          </div>
          <p className="hero__proof-text">
            <strong>4.7★</strong> from 62 Google reviews
          </p>
        </div>
      </div>
    </section>
  );
}
