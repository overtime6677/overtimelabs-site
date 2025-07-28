import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getEnv } from "@/lib/env";
import { rateLimit } from "@/lib/rateLimit";
import Airtable from "airtable";

const payloadSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  role: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
  website: z.string().optional(), // honeypot
});

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  if (!rateLimit(ip).ok) return new NextResponse("Too many requests", { status: 429 });

  const json = await req.json().catch(() => null);
  const parsed = payloadSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const data = parsed.data;
  if (data.website) return NextResponse.json({ ok: true }); // bot

  const env = getEnv();
  const base = new Airtable({ apiKey: env.AIRTABLE_API_KEY }).base(env.AIRTABLE_BASE_ID);

  try {
    await base(env.AIRTABLE_TABLE_LEADS).create({
      name: data.name,
      email: data.email,
      company: data.company || "",
      role: data.role || "",
      interest: data.interest || "",
      message: data.message || "",
      source: data.source || "website",
      createdAt: new Date().toISOString(),
      status: "New",
    } as any);
  } catch (e) {
    console.error("Airtable error", e);
    return new NextResponse("Upstream error", { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
