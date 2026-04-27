import { useEffect, useRef } from "react";

const LINES: { id: string; arm: string; x1: number; y1: number; x2: number; y2: number }[] = [
  { id: "line-tl", arm: "tl", x1: 240, y1: 210, x2: 660, y2: 440 },
  { id: "line-tr", arm: "tr", x1: 1210, y1: 140, x2: 790, y2: 430 },
  { id: "line-bl", arm: "bl", x1: 170, y1: 650, x2: 645, y2: 510 },
  { id: "line-br", arm: "br", x1: 1225, y1: 685, x2: 795, y2: 520 },
  { id: "line-mb", arm: "mb", x1: 1255, y1: 455, x2: 800, y2: 460 },
];

export default function HeroLines() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const lines = Array.from(svg.querySelectorAll<SVGLineElement>(".diag-line"));
    const ruleEl = svg.querySelector<SVGLineElement>(".hero-rule-line");

    const drawTimeouts: number[] = [];
    drawTimeouts.push(
      window.setTimeout(() => {
        lines.forEach((l, i) => {
          drawTimeouts.push(
            window.setTimeout(() => l.classList.add("visible"), i * 150),
          );
        });
        if (ruleEl) ruleEl.classList.add("visible");
      }, 800),
    );

    const onArm = (e: Event) => {
      const detail = (e as CustomEvent<{ arm: string; lit: boolean }>).detail;
      const target = svg.querySelector(`.diag-line[data-arm="${detail.arm}"]`);
      if (!target) return;
      target.classList.toggle("lit", detail.lit);
    };
    window.addEventListener("arm-hover", onArm as EventListener);

    return () => {
      drawTimeouts.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("arm-hover", onArm as EventListener);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      style={{ zIndex: 3, pointerEvents: "none" }}
      aria-hidden
    >
      {LINES.map((l) => (
        <line
          key={l.id}
          id={l.id}
          data-arm={l.arm}
          className="diag-line"
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
        />
      ))}
    </svg>
  );
}
