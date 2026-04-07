# Project Memory

This document reconstructs the current website project in one place.

## Product Summary

- Product: Personal portfolio website for hiring managers
- Goal: Help visitors understand positioning, impact, and thinking quickly
- Format: Static one-page portfolio with expandable project detail
- Stack: Next.js App Router, Tailwind CSS, shadcn-style UI components
- Theme: Dark, modern minimalist

## Core UX Decisions

- Homepage is summary-first and compact
- Project cards show visible signal before click
- Deeper project detail opens only after user action
- Resume and PRD documents are secondary layers
- No CMS or backend

## Current Sections

1. Hero
2. What I Do
3. Selected Work
4. Skills
5. Experience
6. Resume
7. Contact

## Current Content Model

- `hero`
- `capabilities`
- `projects`
- `experiences`
- `skillGroups`
- `resume`
- `contact`

All live content is stored in `src/content/site.ts`.

## Project Types

- Product
- Business / Strategy
- Technical

## Supporting Docs

- `public/docs/resume-draft.md`
- `public/docs/activation-redesign-prd.md`
- `public/docs/market-entry-playbook-prd.md`
- `public/docs/ops-automation-dashboard-prd.md`

## Important Files

- `prd.md`
- `website-content-worksheet.md`
- `src/content/site.ts`
- `src/types/site.ts`
- `src/components/portfolio-home.tsx`

## Notes

- The current project content is placeholder-quality but structured for fast replacement.
- Typography uses Inter as primary sans, Georgia for display moments, and JetBrains Mono only for technical emphasis.
- The visual system is intentionally dark, minimal, and compact.
