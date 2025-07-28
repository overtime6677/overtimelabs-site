# OvertimeLabs.ai site

Marketing site for consulting & systems packages.

## Quick start

```bash
pnpm i    # or npm i
pnpm dev
```

Env vars (copy `.env.example` to `.env.local`).

Deploy on **Vercel**. Add the domain and env vars there.

## Airtable

Create a base with table **Leads** and fields:
- name, email, company, role, interest, message, source, createdAt, status, dealValue, notes

Put your `AIRTABLE_API_KEY`, `AIRTABLE_BASE_ID`, and `AIRTABLE_TABLE_LEADS` in env.

## Analytics

Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=overtimelabs.ai` and add the site in Plausible.

## Booking

Set `NEXT_PUBLIC_CAL_URL=https://cal.com/overtimelabs`.
