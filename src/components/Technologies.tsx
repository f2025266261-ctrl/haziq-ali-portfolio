const ROW_ONE = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "HTML/CSS",
];

const ROW_TWO = [
  "Groq AI",
  "Gemini AI",
  "Claude AI",
  "LangChain",
  "OpenAI",
  "GitHub Copilot",
  "Vercel",
  "GitHub",
  "Antigravity AI",
];

function MarqueeRow({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const className =
    direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="relative overflow-hidden">
      <div className={`marquee ${className}`}>
        {[...items, ...items].map((label, index) => (
          <span
            key={`${label}-${index}`}
            className="flex items-center gap-2 rounded-full border border-cyan-400/50 bg-slate-950/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-[0_0_20px_rgba(34,211,238,0.1)] transition hover:border-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)] sm:px-5 sm:py-2 sm:text-xs"
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section
      id="tech"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,_rgba(59,130,246,0.18),_transparent_70%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Tech Stack
          </p>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold sm:text-5xl">
              Technologies I Work With
            </h2>
            <span className="h-[2px] w-40 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.75)]" />
          </div>
          <p className="max-w-2xl text-base text-blue-100/80">
            Powered by cutting-edge tools.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <MarqueeRow items={ROW_ONE} direction="left" />
          <MarqueeRow items={ROW_TWO} direction="right" />
        </div>
      </div>
    </section>
  );
}
