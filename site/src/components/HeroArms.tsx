import { type CSSProperties } from "react";

type Position = "tl" | "tr" | "bl" | "br" | "mb";

type Arm = {
  key: Position;
  pill: string;
  titleLines: [string, string];
  sub: string;
  href: string;
  dim?: boolean;
  titleSize: string;
  subSize?: string;
};

const ARMS: Arm[] = [
  {
    key: "tl",
    pill: "Catering",
    titleLines: ["SH", "Catering"],
    sub: "Bedrijfshoreca & events",
    href: "#catering",
    titleSize: "clamp(36px, 4.2vw, 66px)",
  },
  {
    key: "tr",
    pill: "Studio",
    titleLines: ["SH", "Studio"],
    sub: "Meubels met krijtverf",
    href: "#studio",
    titleSize: "clamp(22px, 2.4vw, 38px)",
  },
  {
    key: "bl",
    pill: "Plantaardige keuken",
    titleLines: ["Vesna in", "de keuken"],
    sub: "Plantaardig lunchconcept",
    href: "#kitchen",
    titleSize: "clamp(30px, 3.5vw, 55px)",
  },
  {
    key: "br",
    pill: "Contact",
    titleLines: ["Neem", "contact op"],
    sub: "Zeg hallo",
    href: "#contact",
    titleSize: "clamp(20px, 2vw, 32px)",
  },
  {
    key: "mb",
    pill: "Binnenkort",
    titleLines: ["Menu", "Builder"],
    sub: "Binnenkort live",
    href: "#menu-builder",
    titleSize: "clamp(18px, 1.8vw, 28px)",
    subSize: "clamp(11px, 1.1vw, 16px)",
    dim: true,
  },
];

const POSITIONS: Record<Position, CSSProperties> = {
  tl: { top: "16%", left: "7%", alignItems: "flex-start" },
  tr: { top: "9%", right: "5%", alignItems: "flex-end" },
  bl: { bottom: "22%", left: "6%", alignItems: "flex-start" },
  br: { bottom: "21%", right: "7%", alignItems: "flex-end" },
  mb: { top: "48%", right: "3%", alignItems: "flex-end", transform: "translateY(-50%)" },
};

function fireArmHover(arm: Position, lit: boolean) {
  window.dispatchEvent(
    new CustomEvent("arm-hover", { detail: { arm, lit } }),
  );
}

export default function HeroArms() {
  return (
    <>
      {ARMS.map((a) => {
        const reversed = a.key === "tr" || a.key === "br" || a.key === "mb";
        return (
          <a
            key={a.key}
            href={a.href}
            className={`arm arm-${a.key} hidden md:flex`}
            style={{
              position: "absolute",
              zIndex: 10,
              flexDirection: "column",
              gap: "6px",
              textDecoration: "none",
              ...POSITIONS[a.key],
            }}
            onMouseEnter={() => fireArmHover(a.key, true)}
            onMouseLeave={() => fireArmHover(a.key, false)}
          >
            <div className="arm-pill">{a.pill}</div>
            <div
              className="arm-title"
              style={{
                fontSize: a.titleSize,
                color: a.dim ? "#8a8078" : undefined,
              }}
            >
              {a.titleLines[0]}
              <br />
              {a.titleLines[1]}
            </div>
            <div
              className="arm-sub"
              style={{
                fontSize: a.subSize ?? "clamp(14px, 1.6vw, 24px)",
              }}
            >
              {reversed ? (
                <>
                  <span className="arm-arrow">→</span> {a.sub}
                </>
              ) : (
                <>
                  {a.sub} <span className="arm-arrow">→</span>
                </>
              )}
            </div>
          </a>
        );
      })}
    </>
  );
}
