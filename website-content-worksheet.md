# Website Content Worksheet

Use this document to collect the final content for every website section before updating `src/content/site.ts`.

This worksheet now matches the current frontend structure:

1. Hero
2. What I Do / Capabilities
3. Selected Work / Projects
4. Experience
5. Skills
6. Resume
7. Contact

The site is designed to be compact, dark, and summary-first. Visitors should understand your value quickly, then choose to open a project for deeper detail.

## How to Use This Worksheet

1. Replace every placeholder with real information.
2. Keep most answers concise and concrete.
3. For projects, write the visible summary first, then the deeper case-study fields.
4. Prioritize outcomes, ownership, and clarity over long storytelling.
5. Once complete, transfer the content into `src/content/site.ts`.

---

## 1. Hero

This section creates the first impression. It should answer:

- Who are you?
- What kind of work do you do?
- Why should someone keep scrolling?

### Fields

- `eyebrow`
  Short label above the headline.
  Example: `Product x strategy x technical portfolio`

- `name`
  Your full name exactly as you want it shown in the header and hero.

- `title`
  Your main positioning statement.
  Recommendation: 8-16 words.

- `intro`
  A short paragraph about how you work, what problems you solve, and how you create value.
  Recommendation: 2-4 sentences.

- `availability`
  A short note about what roles, teams, or opportunities you are open to.

### CTA Fields

- `primaryCta.label`
- `primaryCta.href`
- `secondaryCta.label`
- `secondaryCta.href`

Recommended defaults:

- `primaryCta.href`: `#work`
- `secondaryCta.href`: `#contact`

### Hero Stats

Add 2-4 short stats.

Each stat uses:

- `value`
- `label`

Good stat ideas:

- number of featured case studies
- years of experience
- measurable impact
- operating lanes
- hiring-manager scan time

### Hero Draft Template

- `eyebrow`:
- `name`:
- `title`:
- `intro`:
- `availability`:
- `primaryCta.label`:
- `primaryCta.href`:
- `secondaryCta.label`:
- `secondaryCta.href`:
- `stats`:
  - Stat 1
    - `value`:
    - `label`:
  - Stat 2
    - `value`:
    - `label`:
  - Stat 3
    - `value`:
    - `label`:
  - Optional Stat 4
    - `value`:
    - `label`:

---

## 2. What I Do / Capabilities

This section explains your working lanes. The current site works best with 3 capability blocks.

Recommended pattern:

- one product-oriented block
- one business / strategy block
- one technical / execution block

### Fields Per Capability

- `title`
  Example: `Product Management`

- `summary`
  One short paragraph explaining how you create value in this lane.

- `points`
  A short list of concrete strengths or tasks.
  Recommendation: 3-5 items.

### Capability Draft Template

- Capability 1
  - `title`:
  - `summary`:
  - `points`:
    1.
    2.
    3.
    4.
    5.

- Capability 2
  - `title`:
  - `summary`:
  - `points`:
    1.
    2.
    3.
    4.
    5.

- Capability 3
  - `title`:
  - `summary`:
  - `points`:
    1.
    2.
    3.
    4.
    5.

---

## 3. Selected Work / Projects

This is the most important section in the site.

The current UI has two layers:

1. Compact project card
2. Expanded project modal

That means your content should be prepared in two layers too:

1. What visitors see before clicking
2. What visitors see after opening the modal

### Allowed Categories

- `Product`
- `Business / Strategy`
- `Technical`

### How Each Project Appears on the Site

The project card uses:

- `title`
- `category`
- `previewHook`
- `previewImpact`
- `coverStyle`
- `documentLabel`

The project modal uses:

- `title`
- `previewHook`
- `previewRole`
- `problem`
- `contextRole`
- `solution`
- `tools`
- `impactHighlights`
- `impactMetrics`
- `prdUrl`

### Project Field Reference

- `slug`
  URL-friendly project ID.
  Example: `secure-voucher-system`

- `title`
  Clear case-study title.

- `category`
  Must be one of the allowed values above.

- `featured`
  Use `true` if it should appear in the homepage Selected Work section.

- `previewHook`
  This is the one-line case-study summary shown on the card and modal intro.
  Recommendation: 1 sentence.

- `previewImpact`
  Small visible metrics shown on the card.
  Recommendation: 2 items.

- `previewRole`
  Short explanation of your role and scope.
  This is shown in the modal.

- `coverStyle`
  Optional visual style used for the placeholder project image.
  Current built-in options:
  - `signal-breach`
  - `graph-paper`
  - `dashboard-grid`
    Leave blank if you want the category default.

- `tools`
  Tools or technologies shown as chips in the modal.
  Recommendation: 3-5 items.

- `impactHighlights`
  Short bullet points shown in the modal.
  These should be compact, outcome-focused, and easy to scan.
  Recommendation: 2-4 bullets.

- `documentLabel`
  Optional chip label shown on the card and modal.
  Example: `Document`

- `problem`
  Short context paragraph explaining the situation or problem.

- `contextRole`
  Slightly broader working context.
  Focus on team setup, responsibility, decision scope, or cross-functional role.

- `solution`
  Steps you took.
  Recommendation: 3-4 concise bullets.

- `impactMetrics`
  Larger supporting metrics shown in the modal.
  Recommendation: 3 items.

- `keyLearnings`
  These still exist in the content model and are useful for future edits, even if they are not currently emphasized in the compact modal.
  Recommendation: 2-3 items.

- `prdUrl`
  Link to the supporting PRD or artifact.
  Can be local like `/docs/project-prd.md` or blank if unavailable.

### Project Writing Guidance

- Make `previewHook` sharper than `problem`.
- Make `previewImpact` faster to scan than `impactMetrics`.
- Use `impactHighlights` for result statements, not long explanations.
- Use `solution` for your actions, not the team's actions in general.
- Make ownership obvious in `previewRole` and `contextRole`.
- Prefer measurable results whenever possible.

### Project Draft Template

- Project 1
  - `slug`:
  - `title`:
  - `category`:
  - `featured`:
  - `previewHook`:
  - `previewImpact`:
    - Metric 1
      - `value`:
      - `label`:
    - Metric 2
      - `value`:
      - `label`:
  - `previewRole`:
  - `coverStyle`:
  - `tools`:
    1.
    2.
    3.
    4.
    5.
  - `impactHighlights`:
    1.
    2.
    3.
    4.
  - `documentLabel`:
  - `problem`:
  - `contextRole`:
  - `solution`:
    1.
    2.
    3.
    4.
  - `impactMetrics`:
    - Metric 1
      - `value`:
      - `label`:
    - Metric 2
      - `value`:
      - `label`:
    - Metric 3
      - `value`:
      - `label`:
    - Optional Metric 4
      - `value`:
      - `label`:
  - `keyLearnings`:
    1.
    2.
    3.
  - `prdUrl`:

- Project 2
  - `slug`:
  - `title`:
  - `category`:
  - `featured`:
  - `previewHook`:
  - `previewImpact`:
    - Metric 1
      - `value`:
      - `label`:
    - Metric 2
      - `value`:
      - `label`:
  - `previewRole`:
  - `coverStyle`:
  - `tools`:
    1.
    2.
    3.
    4.
    5.
  - `impactHighlights`:
    1.
    2.
    3.
    4.
  - `documentLabel`:
  - `problem`:
  - `contextRole`:
  - `solution`:
    1.
    2.
    3.
    4.
  - `impactMetrics`:
    - Metric 1
      - `value`:
      - `label`:
    - Metric 2
      - `value`:
      - `label`:
    - Metric 3
      - `value`:
      - `label`:
    - Optional Metric 4
      - `value`:
      - `label`:
  - `keyLearnings`:
    1.
    2.
    3.
  - `prdUrl`:

- Project 3
  - `slug`:
  - `title`:
  - `category`:
  - `featured`:
  - `previewHook`:
  - `previewImpact`:
    - Metric 1
      - `value`:
      - `label`:
    - Metric 2
      - `value`:
      - `label`:
  - `previewRole`:
  - `coverStyle`:
  - `tools`:
    1.
    2.
    3.
    4.
    5.
  - `impactHighlights`:
    1.
    2.
    3.
    4.
  - `documentLabel`:
  - `problem`:
  - `contextRole`:
  - `solution`:
    1.
    2.
    3.
    4.
  - `impactMetrics`:
    - Metric 1
      - `value`:
      - `label`:
    - Metric 2
      - `value`:
      - `label`:
    - Metric 3
      - `value`:
      - `label`:
    - Optional Metric 4
      - `value`:
      - `label`:
  - `keyLearnings`:
    1.
    2.
    3.
  - `prdUrl`:

---

## 4. Experience

This section is intentionally light. It should show where your work happened, what role you played, and what kind of impact you drove.

### Fields Per Experience

- `company`
- `role`
- `duration`
- `lane`
- `impact`

### Experience Draft Template

- Experience 1
  - `company`:
  - `role`:
  - `duration`:
  - `lane`:
  - `impact`:

- Experience 2
  - `company`:
  - `role`:
  - `duration`:
  - `lane`:
  - `impact`:

- Experience 3
  - `company`:
  - `role`:
  - `duration`:
  - `lane`:
  - `impact`:

---

## 5. Skills

The site groups skills by how they help you move work forward.

Recommended total: 3 skill groups.

### Fields Per Skill Group

- `category`
- `summary`
- `items`

### Skill Group Draft Template

- Skill Group 1
  - `category`:
  - `summary`:
  - `items`:
    1.
    2.
    3.
    4.
    5.
    6.
    7.

- Skill Group 2
  - `category`:
  - `summary`:
  - `items`:
    1.
    2.
    3.
    4.
    5.
    6.
    7.

- Skill Group 3
  - `category`:
  - `summary`:
  - `items`:
    1.
    2.
    3.
    4.
    5.
    6.
    7.

---

## 6. Resume

This section is a supporting layer, not the main story.

### Fields

- `note`
  Short explanation of what the resume link is and whether it is final.

- `viewUrl`
  Link to view the resume.

- `downloadUrl`
  Link to download the resume.

### Resume Draft Template

- `note`:
- `viewUrl`:
- `downloadUrl`:

---

## 7. Contact

This section should contain only public-safe information.

### Fields

- `email`
- `linkedInUrl`
- `location`

### Contact Draft Template

- `email`:
- `linkedInUrl`:
- `location`:

---

## 8. Final Transfer Checklist

- Hero headline is specific and credible
- Intro sounds like you, not generic portfolio copy
- Capabilities reflect your real working lanes
- Every featured project has a sharp `previewHook`
- Every project has 2 visible `previewImpact` metrics
- Every project clearly explains your ownership in `previewRole`
- Every project has `tools` and `impactHighlights` if possible
- `coverStyle` is selected intentionally or left blank on purpose
- PRD and resume links are valid
- Contact details are final and safe to publish
- Everything is ready to copy into `src/content/site.ts`
