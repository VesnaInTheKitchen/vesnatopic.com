import Section from "./Section";

export default function MenuBuilderSection() {
  return (
    <Section
      id="menu-builder"
      number="04"
      eyebrow="Binnenkort"
      title="Menu Builder"
      bg="bg2"
    >
      <p
        className="text-muted"
        style={{ fontSize: "16px", lineHeight: 1.8, marginBottom: "20px", maxWidth: "480px" }}
      >
        Een eenvoudige tool waarmee bedrijven hun wekelijkse plantaardige
        lunchmenu kunnen plannen — receptenbeheer, weekoverzicht en een
        stafview voor de keuken.
      </p>
      <p
        className="text-muted"
        style={{ fontSize: "16px", lineHeight: 1.8, marginBottom: "32px", maxWidth: "480px" }}
      >
        Op dit moment in ontwikkeling. Geïnteresseerd in early-access? Stuur
        een berichtje en ik laat het weten zodra het live staat.
      </p>

      <div
        className="reveal inline-flex items-center gap-3 text-foreground"
        style={{
          border: "1px solid rgba(226,220,212,0.3)",
          borderRadius: "40px",
          padding: "10px 20px",
          fontSize: "12px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <span
          className="block animate-pulse"
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "oklch(0.62 0.10 32)",
          }}
        />
        In ontwikkeling
      </div>
    </Section>
  );
}
