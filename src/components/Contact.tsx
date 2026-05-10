export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(59,130,246,0.18),_transparent_70%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Contact
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Let&apos;s Talk</h2>
          <p className="max-w-2xl text-base text-blue-100/80">
            Reach out for collaborations, quick builds, or AI-first product
            ideas. I respond fastest on WhatsApp.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="https://wa.me/923260604839"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_20px_40px_rgba(16,185,129,0.45)] transition hover:-translate-y-1 hover:bg-emerald-400 sm:w-fit"
              >
                WhatsApp
              </a>
              <a
                href="[paste your Upwork profile URL here]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#6FDA44] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_20px_40px_rgba(111,218,68,0.45)] transition hover:-translate-y-1 hover:bg-[#7EE85A] sm:w-fit"
              >
                Hire me on Upwork
              </a>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-blue-100/80">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Email
              </p>
              <p className="mt-2 text-base">alihaziq518@gmail.com</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-dashed border-blue-200/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-200/80">
                Fiverr — Coming Soon
              </span>
              <span className="rounded-full border border-dashed border-blue-200/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-200/80">
                Upwork — Coming Soon
              </span>
            </div>
          </div>

          <form className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell me about your project"
                className="rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-blue-400"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
