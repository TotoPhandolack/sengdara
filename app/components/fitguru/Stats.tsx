// Sourced from the Sengdara Fitness Km6 Google Business Profile — real, verified figures only.
const STATS = [
  { label: "Google Rating", value: "4.7★" },
  { label: "Member Reviews", value: "62+" },
  { label: "Gym Equipment", value: "Precor" },
  { label: "Open Until", value: "10 PM", white: true },
];

export default function Stats() {
  return (
    <section id="stats" className="section stats">
      <div className="container stats__row">
        {STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            <span className={`stat__label ${stat.white ? "stat__label--white" : ""}`}>
              {stat.label}
            </span>
            <span className="stat__value">{stat.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
