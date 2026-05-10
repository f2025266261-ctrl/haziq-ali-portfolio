import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { reply: "Missing GROQ API key." },
      { status: 500 }
    );
  }

  const body = (await request.json()) as {
    messages?: Message[];
    systemPrompt?: string;
  };

  const messages = body.messages ?? [];
  const systemPrompt = body.systemPrompt ?? "";

  const response = await fetch(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [
          ...(systemPrompt
            ? [{ role: "system", content: systemPrompt }]
            : []),
          ...messages,
        ],
        temperature: 0.7,
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      { reply: "The AI service is currently unavailable." },
      { status: 500 }
    );
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const reply = data.choices?.[0]?.message?.content ?? "";

  return NextResponse.json({ reply });
}
