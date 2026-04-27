import Section from "./Section";

const LINKS = [
  {
    label: "E-mail",
    value: "info@vesnatopic.com",
    href: "mailto:info@vesnatopic.com",
  },
  {
    label: "WhatsApp",
    value: "+31 6 25407828",
    href: "https://wa.me/31625407828",
  },
  {
    label: "Instagram",
    value: "@vtopic",
    href: "https://www.instagram.com/vtopic",
  },
  {
    label: "Facebook",
    value: "Sir Henry Collective",
    href: "https://www.facebook.com/share/1AUDvvBK83/",
  },
];

export default function ContactSection() {
  return (
    <Section id="contact" number="05" eyebrow="Aan tafel" title="Contact" bg="bg">
      <p
        className="mb-12 text-muted"
        style={{ fontSize: "16px", lineHeight: 1.8, maxWidth: "480px" }}
      >
        Vraag over catering, een meubel laten transformeren, of een
        plantaardig lunchconcept op maat? Stuur een bericht — meestal binnen
        een dag een reactie.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2" style={{ maxWidth: "640px" }}>
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="reveal group block border border-line p-6 no-underline transition-colors hover:border-foreground"
          >
            <div
              className="mb-2 uppercase text-muted"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.3em",
              }}
            >
              {link.label}
            </div>
            <div className="font-serif text-foreground" style={{ fontSize: "20px" }}>
              {link.value}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
