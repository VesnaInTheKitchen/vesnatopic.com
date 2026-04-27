import Section from "./Section";

const OFFERINGS = [
  "Kleurrijke, uitgebreide saladebars",
  "Power bowls vol groenten, granen en eiwitrijke toppings",
  "Snelle dressings die elke lunch extra smaak geven",
  "Slimme plantaardige eiwitbronnen",
];

const FERMENTS = ["kimchi", "snelle pickles", "sauerkraut", "fermented salsa"];

export default function KitchenSection() {
  return (
    <Section
      id="kitchen"
      number="03"
      eyebrow="Vesna in de keuken · plantaardig lunchconcept"
      title={
        <>
          Plantaardig
          <br />lunchconcept
        </>
      }
      bg="bg"
      image={{
        src: "/images/kitchen/vesna-ricotta-bread.jpg",
        alt: "Ricotta met Oost-Indische kers en walnoten op desem",
      }}
      belowGrid={
        <div className="flex flex-col gap-20 md:gap-28">
          {/* Pull quote — full width, breathing room */}
          <p
            className="reveal font-serif italic text-foreground"
            style={{
              fontSize: "clamp(28px, 3.4vw, 48px)",
              lineHeight: 1.25,
              maxWidth: "920px",
            }}
          >
            Minder vlees. Meer smaak. Meer impact.
          </p>

          {/* Two-column lists with extra breathing room */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <h3
                className="reveal mb-6 uppercase text-muted"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                }}
              >
                Wat maak ik?
              </h3>
              <ul className="space-y-4 text-foreground" style={{ fontSize: "17px", lineHeight: 1.5 }}>
                {OFFERINGS.map((item) => (
                  <li key={item} className="reveal border-b border-line pb-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                className="reveal mb-6 uppercase text-muted"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                }}
              >
                Fermentation Basics
              </h3>
              <p
                className="reveal mb-6 text-muted"
                style={{ fontSize: "16px", lineHeight: 1.7 }}
              >
                Levende smaakmakers die elke lunchbox optillen.
              </p>
              <div className="flex flex-wrap gap-2">
                {FERMENTS.map((f) => (
                  <span
                    key={f}
                    className="reveal text-foreground"
                    style={{
                      border: "1px solid rgba(226,220,212,0.3)",
                      borderRadius: "40px",
                      padding: "8px 18px",
                      fontSize: "14px",
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Accent photo — full width, landscape, kicker */}
          <div
            className="reveal w-full overflow-hidden border border-line"
            style={{ aspectRatio: "16 / 9" }}
          >
            <img
              src="/images/kitchen/vesna-bowl-strawberry.jpg"
              alt="Power bowl met edamame, aardbei, tofu en mosterdbloemen"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      }
    >
      <p
        className="text-muted"
        style={{ fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}
      >
        Steeds meer bedrijven willen minder vlees serveren. Gezondere
        medewerkers. Minder verspilling. Een duurzamer imago.
      </p>
      <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.8 }}>
        Ik bied lunchconcepten die meer plantaardig zijn, zonder in te leveren
        op smaak of werkbaarheid in de keuken.
      </p>
    </Section>
  );
}
