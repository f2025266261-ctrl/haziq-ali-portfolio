const SERVICES = [
  {
    title: "AI Chatbot Integration",
    description:
      "Build smart chatbots that speak English and Urdu, answer customer questions 24/7.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M4 6.5A3.5 3.5 0 0 1 7.5 3h9A3.5 3.5 0 0 1 20 6.5v6A3.5 3.5 0 0 1 16.5 16H10l-4 4v-4.5A3.5 3.5 0 0 1 4 12.5z"
          fill="currentColor"
        />
        <circle cx="9" cy="9.5" r="1" fill="rgb(15 23 42)" />
        <circle cx="12" cy="9.5" r="1" fill="rgb(15 23 42)" />
        <circle cx="15" cy="9.5" r="1" fill="rgb(15 23 42)" />
      </svg>
    ),
  },
  {
    title: "Landing Pages",
    description:
      "High-converting beautiful landing pages that turn visitors into clients.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M4 4h16v6H4zM4 12h10v8H4zM16 12h4v8h-4z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Full Business Websites",
    description:
      "Complete websites with all sections, mobile responsive, SEO ready.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M3 4h18v16H3z"
          fill="currentColor"
          opacity="0.6"
        />
        <path d="M3 8h18" stroke="rgb(15 23 42)" strokeWidth="1.5" />
        <path d="M7 12h8" stroke="rgb(15 23 42)" strokeWidth="1.5" />
        <path d="M7 16h6" stroke="rgb(15 23 42)" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "AI Agent Systems",
    description:
      "Multi-agent AI systems that automate complex business workflows.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M7 4h10v6H7zM4 14h6v6H4zM14 14h6v6h-6z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "AI Integration",
    description:
      "Add AI superpowers to any existing website or app.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M12 3l3 6 6 .8-4.5 4.3L18 21l-6-3.3L6 21l1.5-6.9L3 9.8 9 9z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "E-commerce Solutions",
    description:
      "Online stores with product pages, chatbot support, payment integration.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M6 6h12l-1.5 10.5H7.5L6 6z"
          fill="currentColor"
        />
        <circle cx="9" cy="19" r="1.5" fill="currentColor" />
        <circle cx="15" cy="19" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_70%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Services
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">How Can I Help</h2>
          <p className="max-w-2xl text-base text-blue-100/80">
            AI-first builds, high-converting pages, and scalable systems designed
            to move your business faster.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group flex h-full w-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-400/20 text-blue-100 transition duration-300 group-hover:bg-blue-400 group-hover:text-slate-950">
                {service.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-sm text-blue-100/80">
                  {service.description}
                </p>
              </div>
              <span className="mt-auto inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-xs text-blue-200/70 transition group-hover:border-blue-300 group-hover:text-blue-100">
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
