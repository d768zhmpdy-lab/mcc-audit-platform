# MCC Audit Platform

Mobile-first MCC and panel audit platform for Panel Technique.

## Version 1

Version 1 supports technician audit capture, structured checklist responses, defect records with photos, sign-off, report preview/PDF export, and an admin defect tracker.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase Auth, PostgreSQL, and Storage
- Puppeteer for PDF generation

## Getting Started

```bash
npm install
npm run dev
```

Create `.env.local` using `.env.local.example`.

## Required Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Pilot Checklist

- Login works
- Role protection works
- Draft audit creation works
- Checklist saves correctly
- Required defect items show correctly
- Defect uploads work
- Review blocks incomplete submissions
- Report preview loads
- PDF export works
- Admin defect tracker updates save
