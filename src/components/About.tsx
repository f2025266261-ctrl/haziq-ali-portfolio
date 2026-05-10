const HIGHLIGHTS = ["AI Enthusiast", "Fast Delivery", "Pakistani Market Expert"];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_70%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            About
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">About Me</h2>
          <p className="max-w-3xl text-base text-blue-100/80">
            I&apos;m Haziq Ali, an AI enthusiast and full-stack developer from
            Lahore, Pakistan. I don&apos;t just build websites — I build intelligent
            systems. Using cutting-edge AI tools and vibe coding, I can bring
            any idea to life faster than traditional development. From beautiful
            landing pages to complex multi-agent AI systems, I integrate AI into
            everything I build.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item}
              className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center text-sm font-semibold uppercase tracking-wide text-blue-100/90 shadow-[0_18px_50px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
