"use client";

import { useEffect, useState } from "react";

type Project = {
  name: string;
  description: string;
  tags: string[];
  link?: string;
  requirement: string;
  built: string;
  helped: string;
};

const PROJECTS: Project[] = [
  {
    name: "TheAura — Gothic E-commerce + AI Chatbot",
    description:
      "Gothic-themed clothing brand website with integrated AI chatbot that speaks English and Roman Urdu 24/7",
    tags: ["Next.js", "Groq AI", "React", "Tailwind CSS"],
    link: "https://theaura-xx.vercel.app",
    requirement:
      "Client wanted a gothic-themed website for their clothing brand with 24/7 automated customer support",
    built:
      "Full gothic e-commerce landing page with an AI chatbot integrated using Groq API that answers customer questions in both English and Roman Urdu automatically",
    helped:
      "Eliminated need for manual customer support, customers get instant answers about shipping, products and payments at any time",
  },
  {
    name: "Gym Portfolio Website",
    description:
      "Professional gym website with services, trainers, pricing and contact sections",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "https://sultan-fitness-web.vercel.app",
    requirement:
      "Local gym needed a professional online presence to attract more clients",
    built:
      "Clean modern gym website with all sections fully responsive and mobile friendly",
    helped:
      "Gave the gym a professional digital presence to attract and convert online visitors into clients",
  },
  {
    name: "Elite Fitness Coaching Landing Page",
    description: "High-converting luxury landing page for premium coaching.",
    tags: ["Landing Page", "UI/UX", "Marketing"],
    link: "https://fitness-landing-ten.vercel.app",
    requirement: "Fitness coach needed high-converting landing page",
    built:
      "Premium dark luxury landing page with BMI calculator, pricing, testimonials",
    helped: "Professional online presence to attract coaching clients",
  },
  {
    name: "Multi AI Agent System",
    description: "Multi-agent automation platform for complex workflows.",
    tags: ["Full Stack", "AI Agents", "Automation"],
    requirement:
      "Complex automation requiring multiple AI agents working together",
    built: "Full stack multi-agent AI system (frontend + backend)",
    helped: "Coming Soon badge",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.16),_transparent_65%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
            Selected Projects
          </p>
          <h2 className="text-4xl font-bold sm:text-5xl">Projects that ship impact</h2>
          <p className="max-w-2xl text-base text-blue-100/80">
            A curated set of recent builds focused on conversion, brand presence,
            and AI-enabled customer experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <div
              key={project.name}
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(project)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  setActiveProject(project);
                }
              }}
              className="group flex w-full cursor-pointer flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-blue-400/40"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/30 via-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(255,255,255,0.05),_transparent_70%)]" />
                <span className="relative text-sm font-semibold uppercase tracking-[0.3em] text-blue-100/70">
                  Project {index + 1}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="text-sm text-blue-100/80">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-100/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="rounded-full bg-blue-500 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-blue-400"
                  >
                    Live Link
                  </a>
                ) : (
                  <span className="rounded-full border border-dashed border-blue-200/60 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-blue-200/80">
                    Coming Soon
                  </span>
                )}
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    setActiveProject(project);
                  }}
                  className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-wide text-blue-100/80 transition hover:border-blue-300"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur sm:px-6 sm:py-12">
          <div className="flex h-full w-full flex-col overflow-y-auto rounded-none border border-white/10 bg-slate-900/95 p-6 text-left shadow-[0_30px_80px_rgba(15,23,42,0.6)] sm:h-auto sm:max-h-[90vh] sm:max-w-2xl sm:rounded-3xl sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                  Project Brief
                </p>
                <h3 className="mt-2 text-3xl font-semibold text-white">
                  {activeProject.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-blue-100/80 transition hover:border-blue-300"
              >
                Close
              </button>
            </div>
            <div className="mt-6 grid gap-4 text-sm text-blue-100/80">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                  Customer Requirement
                </p>
                <p className="mt-2 text-base text-blue-50">
                  {activeProject.requirement}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                  What I Built
                </p>
                <p className="mt-2 text-base text-blue-50">
                  {activeProject.built}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-200">
                  How It Helped
                </p>
                <p className="mt-2 text-base text-blue-50">
                  {activeProject.helped}
                </p>
              </div>
            </div>
            {activeProject.link ? (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-blue-500 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-blue-400"
              >
                Visit Live Project
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
