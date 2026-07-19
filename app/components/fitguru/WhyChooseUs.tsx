import { sengdaraPhoto } from "./sengdara-photos";

// Copy grounded in real Google reviews for Sengdara Fitness Km6 (Namnueng Kvs,
// Mee Lutsamy, Pandacoco) — no lorem ipsum.
const FEATURES = [
  {
    title: "Premium Precor Equipment",
    desc: "New gym equipment from Precor, a premium global brand — high standards, durable materials.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <path d="M3 12h2m14 0h2M7 8v8m10-8v8M7 12h10" />
      </svg>
    ),
  },
  {
    title: "Pool & Sauna",
    desc: "A full swimming pool and excellent sauna to help you recover between sessions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 12.5L7 21l5-2.5L17 21l-1.5-8.5" />
      </svg>
    ),
  },
  {
    title: "Boxing & Functional Training",
    desc: "A dedicated boxing and functional area for high-intensity, no-equipment-needed workouts.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="12" r="3" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    title: "Friendly, Hands-On Trainers",
    desc: "Trainers who walk the floor to spot you and teach proper form — new members welcome.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6">
        <rect x="2" y="10" width="20" height="4" rx="2" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section why">
      <div className="container why__inner">
        <div className="section-heading">
          <h2>Why Choose Us</h2>
          <p>Rated 4.7 out of 5 from 62 members — here&apos;s what keeps them coming back to Sengdara Fitness Km6</p>
        </div>

        <div className="why__content">
          <div className="why__features">
            {FEATURES.map((f, i) => (
              <div className="feature" key={i}>
                <span className="feature__icon">{f.icon}</span>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="why__gallery">
            <div className="why__gallery-tall">
              <img
                src={sengdaraPhoto("interiorTwoLevel", 570, 820)}
                alt="Sengdara Fitness two-level equipment floor"
                loading="lazy"
              />
            </div>
            <div className="why__gallery-stack">
              <img
                src={sengdaraPhoto("boxingArea", 530, 384)}
                alt="Sengdara Fitness boxing and functional training area"
                loading="lazy"
              />
              <img
                src={sengdaraPhoto("memberCableMachine", 530, 384)}
                alt="Sengdara Fitness member training on a cable machine"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
