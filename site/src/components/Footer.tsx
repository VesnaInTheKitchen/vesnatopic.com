export default function Footer() {
  return (
    <footer
      className="relative w-full border-t border-line bg-background"
      style={{ padding: "60px 48px", zIndex: 10 }}
    >
      <div className="mx-auto flex flex-col items-start justify-between gap-10 md:flex-row md:items-end" style={{ maxWidth: "1100px" }}>
        <div
          className="font-display"
          style={{
            fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 1,
            color: "rgba(226,220,212,0.08)",
            letterSpacing: "0.04em",
          }}
        >
          sir henry
          <br />
          collective
        </div>
        <div
          className="uppercase text-muted text-left md:text-right"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.25em",
            lineHeight: 2,
          }}
        >
          vesnatopic.com
          <br />
          Sinds 1994
          <br />
          <br />
          Bedrijfshoreca
          <br />
          Atelier
          <br />
          Plantaardige keuken
          <br />
          <br />
          © 2026
          <br />
          <a href="/disclaimer.html" className="hover:text-foreground">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
}
