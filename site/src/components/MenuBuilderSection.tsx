import Section from "./Section";

export default function MenuBuilderSection() {
  return (
    <Section
      id="menu-builder"
      number="04"
      eyebrow="Live"
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
        Nu live. Bekijk het huidige weekmenu of blader door eerdere weken.
      </p>

      <a
        href="https://menu.vesnatopic.com"
        className="reveal inline-flex items-center gap-3 text-foreground no-underline"
        style={{
          border: "1px solid rgba(226,220,212,0.3)",
          borderRadius: "40px",
          padding: "10px 20px",
          fontSize: "12px",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          fontFamily: "Inter, sans-serif",
          transition: "border-color .2s, color .2s",
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
        Bekijk de menu builder →
      </a>
    </Section>
  );
}
