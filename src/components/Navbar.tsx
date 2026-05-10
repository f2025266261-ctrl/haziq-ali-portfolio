"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Tech", href: "#tech" },
  { label: "About", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur">
      <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a
          href="#home"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 sm:text-sm"
        >
          Haziq Ali
        </a>
        <div className="hidden items-center gap-4 text-xs font-semibold uppercase tracking-wide text-blue-100/80 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-blue-100"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full border border-blue-400/40 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-100/90 transition hover:border-blue-300"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-blue-100 transition hover:border-blue-300 md:hidden"
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>

        {isOpen ? (
          <div className="absolute right-6 top-full z-50 mt-3 w-[220px] rounded-2xl border border-white/10 bg-slate-950/95 p-4 text-sm text-blue-100/90 shadow-[0_20px_40px_rgba(15,23,42,0.45)] md:hidden">
            <div className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide transition hover:border-blue-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
