import Section from "./Section";

const EQUIPMENT = [
  "Party tent",
  "Praat tafels",
  "Partykramen",
  "Mobiele tap",
  "Terrasverwarming",
  "Lantaarns",
  "Tafels & stoelen",
  "Borden & bestek",
];

const FOOD = [
  "BBQ",
  "Saladebuffetten",
  "Meze's & amuses",
  "Kaas- en pateplateaus",
  "Indonesische gerechten",
  "Mediterrane gerechten",
  "Griekse gerechten",
  "Cocktailparty's",
];

export default function CateringSection() {
  return (
    <Section
      id="catering"
      number="01"
      eyebrow="SH Catering · the singing chef"
      title={
        <>
          Bedrijfshoreca
          <br />& events
        </>
      }
      bg="bg"
      image={{
        src: "/images/catering/sh-catering.jpg",
        alt: "Sir Henry — the singing chef",
      }}
      belowGrid={
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3
              className="reveal mb-5 uppercase text-muted"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
              }}
            >
              Materiaal & meubilair
            </h3>
            <ul className="space-y-3 text-foreground" style={{ fontSize: "16px" }}>
              {EQUIPMENT.map((item) => (
                <li key={item} className="reveal border-b border-line pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3
              className="reveal mb-5 uppercase text-muted"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.3em",
              }}
            >
              Eten & drinken
            </h3>
            <ul className="space-y-3 text-foreground" style={{ fontSize: "16px" }}>
              {FOOD.map((item) => (
                <li key={item} className="reveal border-b border-line pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    >
      <p
        className="font-serif italic text-foreground"
        style={{ fontSize: "clamp(20px, 2vw, 26px)", marginBottom: "20px", lineHeight: 1.4 }}
      >
        Sinds 1994 gespecialiseerd in bedrijfshoreca en lunchconcepten.
      </p>
      <p
        className="text-muted"
        style={{ fontSize: "16px", lineHeight: 1.8, letterSpacing: "0.01em" }}
      >
        Van tent tot servet — wij verzorgen het complete plaatje, met de
        heerlijkste cocktails bij u thuis in combinatie met the singing chef.
      </p>
    </Section>
  );
}
