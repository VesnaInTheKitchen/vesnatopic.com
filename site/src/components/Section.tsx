import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  id: string;
  number?: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
  bg?: "bg" | "bg2";
  image?: { src: string; alt: string; objectPosition?: string };
  imageSide?: "left" | "right";
  /** Optional content rendered full-width below the two-column hero row. */
  belowGrid?: ReactNode;
  className?: string;
};

export default function Section({
  id,
  number,
  eyebrow,
  title,
  children,
  bg = "bg",
  image,
  imageSide = "right",
  belowGrid,
  className = "",
}: Props) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const items = Array.from(el.querySelectorAll<HTMLElement>(".reveal"));
    const onScroll = () => {
      const wh = window.innerHeight;
      items.forEach((item) => {
        if (item.classList.contains("in")) return;
        const r = item.getBoundingClientRect();
        if (r.top < wh * 0.88) item.classList.add("in");
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bgClass = bg === "bg2" ? "bg-bg2" : "bg-background";

  const text = (
    <div>
      {eyebrow && (
        <span
          className="reveal mb-6 block uppercase text-accent"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "9px",
            letterSpacing: "0.35em",
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-display reveal reveal-d1 mb-6 text-foreground"
        style={{
          fontSize: "clamp(48px, 6vw, 88px)",
          lineHeight: 0.9,
          letterSpacing: "0.03em",
        }}
      >
        {title}
      </h2>
      <div className="reveal reveal-d2 text-muted">{children}</div>
    </div>
  );

  const img = image && (
    <div className="reveal reveal-d3">
      <div
        className="w-full overflow-hidden border border-line"
        style={{ aspectRatio: "4 / 3" }}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover"
          style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
          loading="lazy"
        />
      </div>
    </div>
  );

  return (
    <section
      ref={rootRef}
      id={id}
      className={`relative w-full border-t border-line ${bgClass} ${className}`}
      style={{ minHeight: "100vh", padding: "120px 24px", zIndex: 10 }}
    >
      {number && (
        <div
          className="font-display pointer-events-none absolute"
          style={{
            top: "80px",
            left: "40px",
            fontSize: "120px",
            lineHeight: 1,
            color: "rgba(226,220,212,0.04)",
            letterSpacing: "0.02em",
          }}
        >
          {number}
        </div>
      )}

      <div className="mx-auto flex w-full flex-col" style={{ maxWidth: "1100px" }}>
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
          {imageSide === "left" ? (
            <>
              {img ?? <div />}
              {text}
            </>
          ) : (
            <>
              {text}
              {img}
            </>
          )}
        </div>

        {belowGrid && <div className="reveal reveal-d3 mt-20 w-full">{belowGrid}</div>}
      </div>
    </section>
  );
}
