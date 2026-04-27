import { useEffect, useRef } from "react";

type Pt = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  anchor: boolean;
};

export default function ParticleConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let raf = 0;
    let visible = !document.hidden;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pts: Pt[] = Array.from({ length: 90 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00018,
      vy: (Math.random() - 0.5) * 0.00018,
      r: Math.random() * 1.4 + 0.5,
      anchor: false,
    }));
    [
      { x: 0.14, y: 0.16 },
      { x: 0.86, y: 0.16 },
      { x: 0.14, y: 0.84 },
      { x: 0.86, y: 0.84 },
      { x: 0.5, y: 0.5 },
    ].forEach((a) =>
      pts.push({ x: a.x, y: a.y, vx: 0, vy: 0, r: 2.8, anchor: true }),
    );

    const CONNECT_DIST = 0.22;
    const ATTRACT_DIST = 0.18;
    const ATTRACT_K = 0.000012;

    let mx = -1;
    let my = -1;
    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width;
      my = (e.clientY - r.top) / r.height;
    };
    const onMouseLeave = () => {
      mx = -1;
      my = -1;
    };
    canvas.parentElement?.addEventListener("mousemove", onMouseMove);
    canvas.parentElement?.addEventListener("mouseleave", onMouseLeave);

    const onVisibility = () => {
      visible = !document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    const draw = () => {
      if (!visible) {
        raf = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, W, H);

      pts.forEach((p) => {
        if (!p.anchor) {
          if (mx >= 0) {
            const dx = mx - p.x;
            const dy = my - p.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < ATTRACT_DIST && d > 0.0001) {
              p.vx += (dx / d) * ATTRACT_K * (1 - d / ATTRACT_DIST);
              p.vy += (dy / d) * ATTRACT_K * (1 - d / ATTRACT_DIST);
            }
          }
          // soft damping to keep velocities tame
          p.vx *= 0.995;
          p.vy *= 0.995;
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -0.02 || p.x > 1.02) p.vx *= -1;
          if (p.y < -0.02 || p.y > 1.02) p.vy *= -1;
        }
      });

      const ratio = H > 0 ? H / W : 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = (pts[i].y - pts[j].y) * ratio;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x * W, pts[i].y * H);
            ctx.lineTo(pts[j].x * W, pts[j].y * H);
            ctx.strokeStyle = `rgba(226,220,212,${(1 - dist / CONNECT_DIST) * 0.32})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      pts.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(226,220,212,0.6)";
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.parentElement?.removeEventListener("mousemove", onMouseMove);
      canvas.parentElement?.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      style={{ zIndex: 1, pointerEvents: "none" }}
      aria-hidden
    />
  );
}
