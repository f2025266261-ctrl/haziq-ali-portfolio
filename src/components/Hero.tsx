"use client";

import { useEffect, useRef, useState } from "react";

const TITLES = [
  "AI-Powered Web Developer",
  "Full Stack Developer",
  "AI Integration Specialist",
  "Vibe Coder & AI Enthusiast",
];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setTitleIndex((index) => (index + 1) % TITLES.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    let animationId = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const createParticles = () => {
      const count = Math.max(55, Math.floor((width * height) / 18000));
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      }));
    };

    const resize = () => {
      const { clientWidth, clientHeight } = canvas;
      width = clientWidth;
      height = clientHeight;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const update = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(59, 130, 246, 0.08)";
      ctx.lineWidth = 1;
      const gridSize = 48;
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
        }
        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
        }
      }

      const maxDistance = 140;
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < maxDistance) {
            const alpha = 1 - distance / maxDistance;
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 0.55})`;
            ctx.lineWidth = 1.1;
            ctx.shadowBlur = 12;
            ctx.shadowColor = "rgba(34, 211, 238, 0.6)";
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }

      for (const particle of particles) {
        ctx.fillStyle = "rgba(147, 197, 253, 0.9)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = window.requestAnimationFrame(update);
    };

    resize();
    window.addEventListener("resize", resize);
    animationId = window.requestAnimationFrame(update);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  const primaryTitle = TITLES[titleIndex];
  const secondaryTitle = TITLES[(titleIndex + 1) % TITLES.length];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_65%)]" />
      <div className="absolute inset-0 hero-vignette" />
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-12 px-8 py-28 text-center sm:px-6 sm:py-32">
        <div className="fade-in-up flex flex-col items-center gap-7">
          <div className="relative flex h-[80px] w-[80px] items-center justify-center sm:h-[120px] sm:w-[120px]">
            <div className="avatar-glow" />
            <div className="avatar-ring rotate-slow">
              <div className="h-full w-full rounded-full bg-slate-950/90" />
            </div>
            <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-slate-900/80 sm:h-[112px] sm:w-[112px]">
              <img
                src="/profile.png"
                alt="Haziq Ali"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <h1 className="hero-title fade-in text-[2.5rem] font-bold tracking-tight sm:text-7xl">
              HAZIQ ALI
            </h1>
            <div className="typing-wrapper flex flex-col gap-2 text-base sm:text-xl">
              <span key={primaryTitle} className="typing-line">
                {primaryTitle}
              </span>
              <span key={secondaryTitle} className="typing-line typing-delay">
                {secondaryTitle}
              </span>
              <span className="typing-underline" aria-hidden="true" />
            </div>
          </div>
          <span className="fade-in inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-white/5 px-4 py-1 text-sm font-medium uppercase tracking-wide text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
            Lahore, Pakistan
          </span>
          <p className="max-w-[600px] text-sm text-cyan-100/70 sm:text-base">
            I build AI-powered websites, chatbots &amp; intelligent systems that
            work for your business 24/7
          </p>
        </div>
        <div className="fade-in-up flex w-full max-w-sm flex-col items-center gap-4">
          <a
            className="hero-primary-button w-full px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition"
            href="#work"
          >
            View My Work &rarr;
          </a>
          <a
            className="hero-secondary-button w-full border px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition"
            href="https://wa.me/923260604839"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="#25D366"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Let&apos;s Talk on WhatsApp
            </span>
          </a>
        </div>

        <div className="scroll-indicator">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-100/70">
            scroll to explore
          </span>
          <span className="scroll-arrow" aria-hidden="true">
            v
          </span>
        </div>
      </div>
    </section>
  );
}
