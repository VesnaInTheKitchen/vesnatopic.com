import Section from "./Section";

const PIECES = [
  {
    src: "/images/studio/hutch-olijf-donker.jpg",
    alt: "Olijfgroene hutch tegen donkere wand",
  },
  {
    src: "/images/studio/hutch-olijf-licht.jpg",
    alt: "Olijfgroene hutch met houten planken",
  },
  {
    src: "/images/studio/armoire-blauw.jpg",
    alt: "Blauwe armoire met damastpatroon",
  },
  {
    src: "/images/studio/bombe-bruin.jpg",
    alt: "Bombé commode in patina bruin",
  },
  {
    src: "/images/studio/dressoir-bloemen.jpg",
    alt: "Dressoir met handgeschilderde bloemen — te koop",
  },
];

export default function StudioSection() {
  return (
    <Section
      id="studio"
      number="02"
      eyebrow="SH Studio · duurzame meubeltransformatie"
      title={
        <>
          Meubels
          <br />& krijtverf
        </>
      }
      bg="bg2"
      imageSide="left"
      image={{
        src: "/images/studio/kast-blauw.jpg",
        alt: "Blauwe kast met laden, vaas en omlijst landschap",
        // Bias the 4:3 crop downward so the chest body stays in frame.
        objectPosition: "50% 70%",
      }}
      belowGrid={
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {PIECES.map((p) => (
            <div key={p.src} className="reveal overflow-hidden border border-line">
              <img
                src={p.src}
                alt={p.alt}
                className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      }
    >
      <p
        className="text-muted"
        style={{ fontSize: "16px", lineHeight: 1.8, marginBottom: "20px" }}
      >
        Wij geven tweedehands meubels een nieuw leven met hoogwaardige krijtverf
        en eco-friendly materialen. Een bijdrage aan de circulaire economie.
      </p>
      <p className="text-muted" style={{ fontSize: "16px", lineHeight: 1.8 }}>
        Van oude kasten tot vergeten stoelen — elk stuk krijgt een uniek
        karakter. Duurzaam, stijlvol en met aandacht voor detail.
      </p>
    </Section>
  );
}
