import { useEffect, useRef } from "react";
import ParticleConstellation from "./ParticleConstellation";
import HeroLines from "./HeroLines";
import HeroArms from "./HeroArms";

export default function Hero() {
  const sirRef = useRef<HTMLSpanElement>(null);
  const henryRef = useRef<HTMLSpanElement>(null);
  const collRef = useRef<HTMLSpanElement>(null);
  const ruleRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const t = window.setTimeout(() => {
      ruleRef.current?.classList.add("visible");
      subRef.current?.classList.add("visible");
    }, 800);

    const onScroll = () => {
      const y = window.scrollY;
      const factor = y * 0.25;
      if (sirRef.current)
        sirRef.current.style.transform = `translateY(${-factor * 0.5}px)`;
      if (henryRef.current)
        henryRef.current.style.transform = `translateY(${-factor * 0.3}px)`;
      if (collRef.current)
        collRef.current.style.transform = `translateY(${-factor * 0.15}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex w-full items-center justify-center overflow-hidden"
      style={{ height: "100vh" }}
    >
      <ParticleConstellation />
      <div className="blob blob-1" aria-hidden />
      <div className="blob blob-2" aria-hidden />
      <div className="blob blob-3" aria-hidden />
      <div className="hero-vignette" style={{ zIndex: 2 }} aria-hidden />

      <HeroLines />
      <HeroArms />

      <div
        className="relative select-none text-center"
        style={{ zIndex: 5 }}
      >
        <span ref={sirRef} className="hero-sir">
          SIR
        </span>
        <span ref={henryRef} className="hero-henry">
          HENRY
        </span>
        <span ref={collRef} className="hero-collective">
          Collective
        </span>
        <span ref={ruleRef} className="hero-rule" />
        <p ref={subRef} className="hero-sub">
          Bedrijfshoreca &nbsp;·&nbsp; Atelier &nbsp;·&nbsp; Plantaardige keuken
        </p>
      </div>

      <div
        className="scroll-hint absolute flex flex-col items-center gap-2"
        style={{ bottom: "32px", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
      >
        <span
          className="uppercase text-muted"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "9px",
            letterSpacing: "0.4em",
          }}
        >
          Scroll
        </span>
        <div className="scroll-track" />
      </div>
    </section>
  );
}
