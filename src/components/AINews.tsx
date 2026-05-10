"use client";

import { useEffect, useState } from "react";

type NewsItem = {
  title: string;
  source: string;
  date: string;
  url: string;
};

const FALLBACK_NEWS: NewsItem[] = [
  {
    title: "Open-source AI models accelerate on-device innovation",
    source: "AI Industry Digest",
    date: "2026-05-08",
    url: "https://newsapi.org",
  },
  {
    title: "New multimodal assistants boost enterprise workflows",
    source: "Tech Briefing",
    date: "2026-05-07",
    url: "https://newsapi.org",
  },
  {
    title: "Developers embrace agentic tooling for rapid prototyping",
    source: "Developer Weekly",
    date: "2026-05-06",
    url: "https://newsapi.org",
  },
  {
    title: "AI safety updates shape the next wave of deployments",
    source: "AI Policy Watch",
    date: "2026-05-05",
    url: "https://newsapi.org",
  },
  {
    title: "Edge AI hardware sees growing demand in 2026",
    source: "Hardware Trends",
    date: "2026-05-04",
    url: "https://newsapi.org",
  },
  {
    title: "Creative teams integrate AI copilots across pipelines",
    source: "Design Signals",
    date: "2026-05-03",
    url: "https://newsapi.org",
  },
];

const formatDate = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export default function AINews() {
  const [items, setItems] = useState<NewsItem[]>(FALLBACK_NEWS);

  useEffect(() => {
    const controller = new AbortController();
    const apiKey = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

    const loadNews = async () => {
      if (!apiKey) {
        return;
      }

      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=artificial%20intelligence%20OR%20AI%20OR%20technology&language=en&pageSize=6&sortBy=publishedAt",
          {
            headers: {
              "X-Api-Key": apiKey,
            },
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as {
          articles?: Array<{
            title?: string;
            url?: string;
            publishedAt?: string;
            source?: { name?: string };
          }>;
        };

        const articles = data.articles ?? [];
        const mapped = articles
          .filter((article) => article.title && article.url)
          .slice(0, 6)
          .map((article) => ({
            title: article.title ?? "",
            source: article.source?.name ?? "News API",
            date: article.publishedAt ?? "",
            url: article.url ?? "",
          }));

        if (mapped.length > 0) {
          setItems(mapped);
        }
      } catch {
        // Fallback stays in place if fetching fails.
      }
    };

    loadNews();

    return () => controller.abort();
  }, []);

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(59,130,246,0.18),_transparent_70%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="pulse-dot" />
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
              Updated Regularly
            </p>
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl">
            Latest in AI &amp; Tech
          </h2>
          <p className="max-w-2xl text-base text-blue-100/80">
            Fresh headlines and signals from the AI ecosystem, curated for quick
            inspiration and insight.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((item) => (
            <a
              key={`${item.title}-${item.url}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full w-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_18px_50px_rgba(15,23,42,0.35)] transition hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10"
            >
              <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200/80">
                  {item.source}
                </span>
                <h3 className="text-xl font-semibold leading-snug text-white transition group-hover:text-blue-100">
                  {item.title}
                </h3>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-blue-100/70">
                <span>{formatDate(item.date)}</span>
                <span className="rounded-full border border-white/20 px-3 py-1 text-[10px]">
                  Read More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
