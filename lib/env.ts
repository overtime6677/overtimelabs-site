import { z } from "zod";

const envSchema = z.object({
  AIRTABLE_API_KEY: z.string().min(1),
  AIRTABLE_BASE_ID: z.string().min(1),
  AIRTABLE_TABLE_LEADS: z.string().min(1),
  NEXT_PUBLIC_PLAUSIBLE_DOMAIN: z.string().optional(),
  NEXT_PUBLIC_CAL_URL: z.string().url().optional(),
});

export function getEnv() {
  const parsed = envSchema.safeParse(process.env);
  if (!parsed.success) {
    console.error("Invalid environment", parsed.error.flatten().fieldErrors);
    throw new Error("Missing/invalid env vars.");
  }
  return parsed.data;
}
