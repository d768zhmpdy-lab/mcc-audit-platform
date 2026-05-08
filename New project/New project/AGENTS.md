# MCC Audit Platform

This project is a mobile-first MCC and panel audit platform for Panel Technique.

## Product Rules

- Keep the technician workflow simple, clear, and touch-friendly.
- Live inspections are visually limited, non-intrusive, and restricted to safely accessible conditions unless separately controlled and authorised.
- Dead inspections may include additional internal observations.
- Any checklist response of `Needs Attention` or `Critical` must require a linked defect record.
- Every defect must include at least one photo.
- Critical defects default to immediate action required.
- High or Critical findings default the audit follow-up flag to Yes.
- Final submission must be blocked if required defects are missing.
- Reports must be professional, practical, and client-ready.
- Reports must clearly state whether the inspection was live or dead.
- Live inspection reports must include a limitation note.
- User-facing dates must display as `DD/MM/YYYY`.
- Required fields must not be removed without approval.

## Engineering Rules

- Use Next.js, TypeScript, Tailwind CSS, and Supabase.
- Keep code modular, typed, and production-quality.
- Prefer server-side guards for authorization checks.
- Keep forms accessible and mobile-first.
- Avoid unrelated refactors while implementing a phase.
- Keep wording professional and practical.
