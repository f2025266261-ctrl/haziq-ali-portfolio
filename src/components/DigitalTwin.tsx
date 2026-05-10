"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const SYSTEM_PROMPT =
  "You are Haziq Ali's digital twin assistant. Haziq is an AI-powered web developer from Lahore, Pakistan. He builds websites, landing pages, AI chatbots, and multi-agent AI systems. Contact: WhatsApp +923260604839, Email: alihaziq518@gmail.com. Projects: Sultan Fitness website, Elite Fitness landing page, TheAura gothic e-commerce site with AI chatbot, Multi AI Agent system. Services: Landing pages, business websites, AI chatbot integration, AI agent systems, AI integration into existing apps. Always be helpful, professional and friendly. Encourage potential clients to reach out on WhatsApp.";

export default function DigitalTwin() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant" as const,
      content:
        "Hi! I am Haziq's AI Twin. Tell me about your project and I'll help you get started.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const nextMessages = [
      ...messages,
      { role: "user" as const, content: trimmed },
    ];
    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/groq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages,
          systemPrompt: SYSTEM_PROMPT,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = (await response.json()) as { reply?: string };
      if (data.reply) {
        setMessages((current) => [
          ...current,
          { role: "assistant" as const, content: data.reply ?? "" },
        ]);
      }
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant" as const,
          content:
            "Sorry, I could not connect right now. Please reach out on WhatsApp for a fast response.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:bottom-6 sm:left-auto sm:right-6">
      {isOpen ? (
        <div className="flex h-[540px] w-[calc(100vw-32px)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-white shadow-[0_25px_60px_rgba(15,23,42,0.6)] sm:w-[320px]">
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              <p className="text-sm font-semibold">
                Chat with Haziq&#39;s AI Twin
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-wide text-blue-100/80 transition hover:border-blue-300"
            >
              Close
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-sm">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 leading-relaxed ${
                    message.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-white/10 text-blue-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading ? (
              <div className="flex justify-start">
                <div className="rounded-2xl bg-white/10 px-4 py-3 text-blue-100">
                  Typing...
                </div>
              </div>
            ) : null}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-white/10 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    sendMessage();
                  }
                }}
                placeholder="Ask about your project..."
                className="flex-1 rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-sm text-white outline-none transition focus:border-blue-400"
              />
              <button
                type="button"
                onClick={sendMessage}
                className="rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-blue-400"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-blue-500 text-white shadow-[0_18px_40px_rgba(37,99,235,0.5)] transition hover:-translate-y-1 hover:bg-blue-400"
        aria-label="Open chat"
      >
        <span className="text-xl">AI</span>
      </button>
    </div>
  );
}
