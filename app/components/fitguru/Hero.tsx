import NavBar from "./NavBar";

export default function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__diagonal" aria-hidden="true" />

      <NavBar />

      <div className="container hero__content">
        <h1 className="hero__title">
          Elevate&nbsp;&nbsp;your
          <br />
          workout
        </h1>
        <p className="hero__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </p>
        <a href="#pricing" className="btn btn--white">
          Get Started
        </a>
        <div className="hero__socials">
          <a href="#" aria-label="Twitter">
            <svg width="19" height="16" viewBox="0 0 19 16" fill="none">
              <path
                d="M18.5 2.1c-.7.3-1.4.5-2.1.6.8-.5 1.3-1.2 1.6-2.1-.7.4-1.5.7-2.3.9C15 .6 14 .1 12.9.1c-2.1 0-3.7 1.7-3.7 3.7 0 .3 0 .6.1.8-3.1-.2-5.8-1.6-7.6-3.9C1.4 1.2 1.2 1.9 1.2 2.6c0 1.3.6 2.4 1.6 3.1-.6 0-1.2-.2-1.7-.4v.1c0 1.8 1.3 3.3 3 3.7-.3.1-.6.1-1 .1-.2 0-.5 0-.7-.1.5 1.5 1.9 2.6 3.6 2.6-1.3 1-3 1.6-4.7 1.6H.5c1.7 1.1 3.7 1.7 5.9 1.7 7 0 10.9-5.8 10.9-10.9v-.5c.8-.5 1.4-1.2 2-2z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#" aria-label="Facebook">
            <svg width="10" height="19" viewBox="0 0 10 19" fill="none">
              <path
                d="M9 6.3H6.6V4.7c0-.6.4-.8 1-.8h1.9V.1L6.6.1C3.9.1 3 1.5 3 3.8V6.3H1v3.7h2V19h3.6V10h2.4L9 6.3z"
                fill="white"
              />
            </svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="16" height="16" rx="4.5" stroke="white" strokeWidth="1.6" />
              <circle cx="9" cy="9" r="4" stroke="white" strokeWidth="1.6" />
              <circle cx="13.6" cy="4.4" r="1" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
