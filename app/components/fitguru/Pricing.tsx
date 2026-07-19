// Google Business Profiles don't expose membership pricing, so real dollar
// figures aren't available here. Rather than invent prices, each plan links
// to a real contact method (call/Maps) so visitors get an accurate quote.
// Swap in real prices as soon as you have them.
const PLANS = [
  {
    name: "Day Pass",
    desc: "Try the gym for a day — full access to the equipment floor and cardio area.",
    features: ["Precor equipment floor", "Cardio & elevated track", "Locker access"],
    featured: false,
  },
  {
    name: "Monthly Membership",
    desc: "Full access, including the pool, sauna, and boxing area, billed monthly.",
    features: [
      "Everything in Day Pass",
      "Swimming pool & sauna",
      "Boxing & functional area",
      "Trainer floor support",
    ],
    featured: true,
  },
  {
    name: "Annual Membership",
    desc: "Our best-value plan for members training year-round.",
    features: [
      "Everything in Monthly",
      "Priority class booking",
      "Guest passes",
      "Restaurant discount",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container pricing__inner">
        <div className="pricing__header">
          <div>
            <p className="eyebrow">Membership</p>
            <h2 className="uppercase">Join Today</h2>
          </div>
          <a href="tel:+8562093460645" className="btn btn--dark">
            Call 020 93 460 645
          </a>
        </div>

        <div className="pricing__cards">
          {PLANS.map((plan, i) => (
            <article className={`price-card ${plan.featured ? "price-card--featured" : ""}`} key={i}>
              <div className="price-card__body">
                <div className="price-card__head">
                  <p className="price-card__name">{plan.name}</p>
                  <div className="price-card__price">
                    <span className="amount" style={{ fontSize: 24 }}>
                      Contact&nbsp;for&nbsp;pricing
                    </span>
                  </div>
                </div>
                <p className="price-card__desc">{plan.desc}</p>
                <ul className="price-card__list">
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className={`tick ${plan.featured ? "tick--light" : "tick--dark"}`}>&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="tel:+8562093460645"
                className={`btn btn--block ${plan.featured ? "btn--white" : "btn--dark"}`}
                style={{ textDecoration: "none" }}
              >
                Call to Join
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
