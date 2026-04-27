const ITEMS = [
  "Sir Henry Collective",
  "Bedrijfshoreca",
  "Atelier",
  "Plantaardige keuken",
  "vesnatopic.com",
  "Sinds 1994",
];

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div
      className="overflow-hidden bg-bg2 border-t border-line"
      style={{ borderBottom: "1px solid rgba(226,220,212,0.12)", padding: "18px 0" }}
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
