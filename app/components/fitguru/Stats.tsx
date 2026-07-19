const STATS = [
  { label: "Years of Service", value: "5+" },
  { label: "Certified Trainers", value: "10+" },
  { label: "Happy Members", value: "786+" },
  { label: "Customer Satisfaction", value: "95%", white: true },
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
