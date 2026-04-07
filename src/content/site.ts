import type { SiteContent } from "@/types/site";

export const siteContent: SiteContent = {
  hero: {
    eyebrow: "Tech Product Ethusiast",
    name: "Titus Patrick",
    title: "Structured operator for product, business, and technical bets.",
    intro:
      "I turn ambiguous problems into clear priorities, measurable execution, and artifacts a hiring manager can scan quickly. This site is intentionally summary-first: the signal is visible upfront, while the deeper story opens only when you ask for it.",
    availability:
      "Open to Product Manager, strategy, and cross-functional operator roles with a bias for execution.",
    primaryCta: {
      label: "View My Work",
      href: "#work",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "#contact",
    },
    stats: [
      { value: "3", label: "operating lanes across product, business, and technical work" },
      { value: "<30s", label: "target scan time for a hiring manager to understand the value" },
      { value: "3", label: "featured case studies with structured impact and supporting docs" },
    ],
  },
  capabilities: [
    {
      title: "Product Management",
      summary:
        "I shape unclear problems into scannable decisions: user pain, success metric, scope, experiment, and rollout path.",
      points: [
        "Problem framing and prioritization",
        "PRD writing and cross-functional alignment",
        "Experiment design and KPI definition",
      ],
    },
    {
      title: "Business / Strategy",
      summary:
        "I connect product choices to market reality by translating analysis into operating tradeoffs, investment logic, and clear recommendations.",
      points: [
        "Market sizing and opportunity framing",
        "Unit economics and scenario planning",
        "Decision memos for leadership stakeholders",
      ],
    },
    {
      title: "Technical / Engineering",
      summary:
        "I prototype workflows, automate repetitive work, and partner closely with engineering so execution stays grounded in delivery reality.",
      points: [
        "Internal tooling and automation",
        "Technical discovery with engineers",
        "Data-informed implementation handoff",
      ],
    },
  ],
  projects: 
  [
    // {
    //   slug: "activation-redesign",
    //   title: "Activation Redesign for a B2B Workflow Product",
    //   category: "Product",
    //   previewHook:
    //     "Turned a vague onboarding drop-off problem into a focused activation program with a clear first-value path.",
    //   previewImpact: [
    //     { value: "+11 pts", label: "activation rate" },
    //     { value: "-18%", label: "time to first value" },
    //   ],
    //   previewRole:
    //     "Owned problem framing, KPI definition, prioritization, and the execution narrative across product, design, ops, and engineering.",
    //   coverStyle: "signal-breach",
    //   tools: ["Figma", "Amplitude", "Notion"],
    //   impactHighlights: [
    //     "Aligned the team around one activation definition instead of competing opinions.",
    //     "Reduced onboarding friction with a narrower two-sprint scope instead of another broad redesign.",
    //     "Linked release decisions to a simple experiment tracker and explicit KPI ownership.",
    //   ],
    //   documentLabel: "Document",
    //   problem:
    //     "New users were signing up, but too many stalled before their first meaningful action. Teams had strong opinions on the fix, but no shared view of where the real friction lived or which changes would move the right metric fastest.",
    //   contextRole:
    //     "Acted as the product lead for an early-stage workflow product and aligned design, operations, and engineering around one activation definition and one release plan.",
    //   solution: [
    //     "Mapped the activation funnel into concrete steps so the team could see where time-to-value broke down.",
    //     "Prioritized a two-sprint package of guided setup, role-based templates, and clearer empty states instead of shipping another broad onboarding refresh.",
    //     "Introduced a lightweight experiment tracker so every decision stayed tied to a hypothesis, owner, and success metric.",
    //   ],
    //   impactMetrics: [
    //     { value: "+11 pts", label: "activation rate after release" },
    //     { value: "-18%", label: "reduction in time to first value" },
    //     { value: "2 sprints", label: "from diagnosis to production" },
    //   ],
    //   keyLearnings: [
    //     "A crisp definition of first value unlocked faster alignment than another round of generic user feedback synthesis.",
    //     "The strongest product work here was not feature volume; it was choosing the smallest package that made the metric legible.",
    //   ],
    //   prdUrl: "/docs/activation-redesign-prd.md",
    //   featured: true,
    // },
    // {
    //   slug: "market-entry-playbook",
    //   title: "Market Entry Playbook for a New Operations Segment",
    //   category: "Business / Strategy",
    //   previewHook:
    //     "Converted a broad expansion question into three entry scenarios with clear economic tradeoffs and an operator-ready recommendation.",
    //   previewImpact: [
    //     { value: "3", label: "entry scenarios compared" },
    //     { value: "+14%", label: "projected margin upside" },
    //   ],
    //   previewRole:
    //     "Built the analysis layer across market sizing, operating model assumptions, and recommendation framing for leadership review.",
    //   coverStyle: "graph-paper",
    //   tools: ["Excel", "Metabase", "Presentation Memo"],
    //   impactHighlights: [
    //     "Turned an abstract growth idea into a decision model leaders could compare side by side.",
    //     "Separated reversible bets from harder commitments so rollout sequencing stayed practical.",
    //     "Produced an operator-ready recommendation instead of a strategy deck with no next step.",
    //   ],
    //   documentLabel: "Document",
    //   problem:
    //     "The team wanted to expand into an adjacent segment, but the discussion stayed abstract because the opportunity, cost-to-serve, and sequencing risks were not being compared in one decision framework.",
    //   contextRole:
    //     "Led the business analysis and recommendation narrative, working with operators to test assumptions and turn raw inputs into an investable decision memo.",
    //   solution: [
    //     "Created a decision model that compared market size, CAC sensitivity, staffing footprint, and break-even timing across three entry paths.",
    //     "Separated reversible bets from harder commitments so leaders could stage the rollout instead of debating an all-or-nothing move.",
    //     "Translated the final recommendation into an operator-friendly playbook that linked strategy to weekly execution milestones.",
    //   ],
    //   impactMetrics: [
    //     { value: "3 weeks", label: "from brief to leadership-ready recommendation" },
    //     { value: "+14%", label: "projected contribution margin upside" },
    //     { value: "1", label: "phased entry plan chosen over full launch" },
    //   ],
    //   keyLearnings: [
    //     "Strategy becomes more persuasive when it is expressed as a sequence of commitments instead of a single grand answer.",
    //     "Leadership confidence increased once the memo showed what would be learned at each stage, not just the upside case.",
    //   ],
    //   prdUrl: "/docs/market-entry-playbook-prd.md",
    //   featured: true,
    // },
    // {
    //   slug: "ops-automation-dashboard",
    //   title: "Ops Dashboard and Automation Layer for Weekly Reporting",
    //   category: "Technical",
    //   previewHook:
    //     "Replaced manual reporting loops with a lightweight internal dashboard that made operational performance visible without spreadsheet churn.",
    //   previewImpact: [
    //     { value: "-9 hrs", label: "manual work each week" },
    //     { value: "+99%", label: "data freshness on Monday reporting" },
    //   ],
    //   previewRole:
    //     "Scoped the workflow, designed the reporting model, and built the first version of the automation layer to reduce repetitive operations work.",
    //   coverStyle: "dashboard-grid",
    //   tools: ["Next.js", "SQL", "Automation Scripts"],
    //   impactHighlights: [
    //     "Collapsed scattered spreadsheets into one trusted weekly reporting view.",
    //     "Reduced analyst prep work so more time went to interpretation instead of data assembly.",
    //     "Improved Monday review readiness with clearer ownership of source data and refresh logic.",
    //   ],
    //   documentLabel: "Document",
    //   problem:
    //     "Weekly business reviews depended on manually stitched spreadsheets, which meant recurring delays, version mismatch, and too much analyst time spent preparing updates instead of interpreting them.",
    //   contextRole:
    //     "Worked as the bridge between business stakeholders and engineering-minded implementation, defining the minimum useful dashboard and automations before scaling the workflow.",
    //   solution: [
    //     "Mapped the reporting workflow from source extraction to decision meeting, then cut every step that did not change the decision quality.",
    //     "Built a first internal dashboard with cleaner metric definitions, automated refresh logic, and a clearer separation between source data and presentation.",
    //     "Added reusable templates for recurring reporting so weekly updates stayed consistent as the team scaled.",
    //   ],
    //   impactMetrics: [
    //     { value: "-9 hrs", label: "manual reporting time saved per week" },
    //     { value: "+99%", label: "on-time freshness for Monday reviews" },
    //     { value: "1 source", label: "single reporting reference replacing multiple files" },
    //   ],
    //   keyLearnings: [
    //     "The most useful technical solution was not maximum sophistication; it was making the workflow trustworthy enough that people stopped building private backups.",
    //     "Internal tools create leverage fastest when they reduce decision latency, not just keystrokes.",
    //   ],
    //   prdUrl: "/docs/ops-automation-dashboard-prd.md",
    //   featured: true,
    // },
  ],
  experiences: [
    {
      company: "tiket.com",
      role: "Growth Product Manager Intern",
      duration: "Recent",
      lane: "Product",
      impact:
        " Improved gamification feature adoption through tracking and experiment design",
    },
    {
      company: "Kompas Gramedia",
      role: "Product Manager Intern",
      duration: "Apr 2025 - Oct 2025",
      lane: "Product",
      impact:
        "Delivered 7+ PRDs and aligned 3 cross-functional teams",
    },
  ],
  skillGroups: [
  {
    category: "Product & Execution",
    summary: "Structuring ambiguous problems into clear product direction, measurable outcomes, and aligned execution.",
    items: [
      "Product Requirement Document (PRD)",
      "Experiment design & success metrics",
      "Roadmapping & prioritization",
      "Cross-functional alignment",
      "Problem structuring & solution framing"
    ],
  },
  {
    category: "Product Analytics",
    summary: "Using behavioral data to identify opportunities, validate decisions, and improve product performance.",
    items: [
      "Funnel & behavioral analysis",
      "Event tracking & instrumentation",
      "SQL for product analysis",
      "Experiment evaluation",
      "Data-driven iteration"
    ],
  },
  {
    category: "Technical & Systems Thinking",
    summary: "Understanding system structure to design realistic, scalable, and executable product solutions.",
    items: [
      "System & flow design",
      "Database schema understanding",
      "Translating product to technical specs",
      "Working with engineering teams",
      "Structured documentation (PRD, flows)"
    ],
  },
  ],
  resume: {
    note:
      "Detailed experience across product management, analytics, and system design. Includes PRDs, experiment frameworks, and cross-functional project work.",
    viewUrl: "https://drive.google.com/file/d/1wPrhTpA5B1BeMHshovQ8gOolVkHonShs/view?usp=drive_link",
    downloadUrl: "https://drive.google.com/file/d/1wPrhTpA5B1BeMHshovQ8gOolVkHonShs/view?usp=drive_link",
  },
  contact: {
    email: "tituspatrick.me@gmail.com",
    linkedInUrl: "https://www.linkedin.com/in/tituspatrick",
    location: "Jakarta, Indonesia. Open to regional or remote opportunities.",
  },
};
