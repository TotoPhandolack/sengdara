"use client";

import { useState } from "react";

type Billing = "monthly" | "yearly";

const PLANS = [
  {
    name: "Beginner Plan",
    price: "$10",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    features: [
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
    ],
    featured: false,
  },
  {
    name: "Premium  Plan",
    price: "$15",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    features: [
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
    ],
    featured: true,
  },
  {
    name: "Premium  Plan",
    price: "$20",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    features: [
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
      "Lorem ipsum dolor sit amet,",
    ],
    featured: false,
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("yearly");

  return (
    <section id="pricing" className="section pricing">
      <div className="container pricing__inner">
        <div className="pricing__header">
          <div>
            <p className="eyebrow">Pricing Plan</p>
            <h2 className="uppercase">Join Today</h2>
          </div>
          <div className="toggle">
            <button
              type="button"
              className={`toggle__btn ${billing === "monthly" ? "toggle__btn--active" : ""}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`toggle__btn ${billing === "yearly" ? "toggle__btn--active" : ""}`}
              onClick={() => setBilling("yearly")}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="pricing__cards">
          {PLANS.map((plan, i) => (
            <article className={`price-card ${plan.featured ? "price-card--featured" : ""}`} key={i}>
              <div className="price-card__body">
                <div className="price-card__head">
                  <p className="price-card__name">{plan.name}</p>
                  <div className="price-card__price">
                    <span className="amount">{plan.price}</span>
                    <span className="per">/ {billing === "monthly" ? "Month" : "Year"}</span>
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
              <button type="button" className={`btn btn--block ${plan.featured ? "btn--white" : "btn--dark"}`}>
                Choose Plan
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
