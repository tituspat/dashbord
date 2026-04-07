"use client";

import Link from "next/link";
import * as React from "react";
import { ArrowRight, Download, ExternalLink, Mail, MapPin, MoveRight } from "lucide-react";

import { ProjectDetailOverlay } from "@/components/project-detail-overlay";
import { ProjectPreviewCard } from "@/components/project-preview-card";
import { SectionHeading } from "@/components/section-heading";
import { SectionShell } from "@/components/section-shell";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Capability, Experience, Project, SiteContent, SkillGroup } from "@/types/site";

type PortfolioHomeProps = {
  content: SiteContent;
};

export function PortfolioHome({ content }: PortfolioHomeProps) {
  const [selectedSlug, setSelectedSlug] = React.useState<string | null>(null);

  React.useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get("project");
      const exists = content.projects.some((project) => project.slug === slug);

      setSelectedSlug(exists ? slug : null);
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);

    return () => {
      window.removeEventListener("popstate", syncFromUrl);
    };
  }, [content.projects]);

  const activeProject = content.projects.find((project) => project.slug === selectedSlug) ?? null;
  const featuredProjects = content.projects.filter((project) => project.featured);

  const openProject = (slug: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set("project", slug);

    if (selectedSlug) {
      window.history.replaceState({ project: slug }, "", url);
    } else {
      window.history.pushState({ project: slug }, "", url);
    }

    setSelectedSlug(slug);
  };

  const closeProject = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("project");
    window.history.replaceState({}, "", url);
    setSelectedSlug(null);
  };

  return (
    <div id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(73,212,255,0.18),transparent_50%)]" />
      <div className="absolute inset-x-0 top-[26rem] -z-10 h-[18rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />

      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteHeader name={content.hero.name} />

      <main id="content" className="pb-12">
        <HeroSection
          name={content.hero.name}
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          intro={content.hero.intro}
          availability={content.hero.availability}
          primaryCta={content.hero.primaryCta}
          secondaryCta={content.hero.secondaryCta}
          stats={content.hero.stats}
        />
        <WhatIDoSection capabilities={content.capabilities} />
        <SelectedWorkSection projects={featuredProjects} onOpenProject={openProject} />
        <SkillsSection groups={content.skillGroups} />
        <ExperienceSection experiences={content.experiences} />
        <ResumeSection
          note={content.resume.note}
          viewUrl={content.resume.viewUrl}
          downloadUrl={content.resume.downloadUrl}
        />
        <ContactSection
          email={content.contact.email}
          linkedInUrl={content.contact.linkedInUrl}
          location={content.contact.location}
        />
      </main>

      <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Built with Next.js, Tailwind CSS, and shadcn-style components.</p>
          <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-foreground/70">
            Compact by default. Deeper on demand.
          </p>
        </div>
      </footer>

      <ProjectDetailOverlay project={activeProject} onClose={closeProject} />
    </div>
  );
}

type HeroSectionProps = SiteContent["hero"];

function HeroSection({
  name,
  eyebrow,
  title,
  intro,
  availability,
  primaryCta,
  secondaryCta,
  stats,
}: HeroSectionProps) {
  return (
    <SectionShell className="pb-8 pt-12 sm:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
        <div className="space-y-10">
          <div className="space-y-6">
            <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </p>
            <div className="space-y-5">
              <p className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-cyan-300/85">
                {name}
              </p>
              <h1 className="max-w-4xl text-balance font-display text-6xl leading-[0.9] tracking-tight text-foreground sm:text-7xl lg:text-[5.7rem]">
                {title}
              </h1>
              <p className="max-w-2xl text-pretty text-lg leading-8 text-foreground/72">{intro}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </div>

        <div className="space-y-5">
          <Card className="surface-panel overflow-hidden">
            <CardContent className="space-y-6 p-6">
              <div className="space-y-2">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Hiring-manager scan
                </p>
                <h2 className="font-display text-3xl leading-none text-foreground">
                  Signal first, artifacts second.
                </h2>
                <p className="text-sm leading-7 text-foreground/68">
                  Every section is designed to answer one question quickly: what kind of problems I solve, how I
                  think, and what proof exists behind the claim.
                </p>
              </div>

              <div className="space-y-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="surface-soft rounded-[1.2rem] px-4 py-4">
                    <p className="font-display text-3xl leading-none text-foreground">{stat.value}</p>
                    <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/[0.08] px-5 py-5 text-foreground shadow-[0_18px_50px_rgba(0,0,0,0.26)]">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-200/72">
              Current focus
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground/82">{availability}</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function WhatIDoSection({ capabilities }: { capabilities: Capability[] }) {
  return (
    <SectionShell id="capabilities" className="pt-8">
      <SectionHeading
        eyebrow="What I Do"
        title="Three lenses, one way of working."
        description="I operate across product, business, and technical contexts, but the pattern stays the same: clarify the decision, align the team, and make progress measurable."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <Card key={capability.title} className="surface-panel">
            <CardContent className="space-y-5 p-6">
              <div className="space-y-3">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Capability
                </p>
                <h3 className="font-display text-3xl leading-none text-foreground">{capability.title}</h3>
                <p className="text-sm leading-7 text-foreground/68">{capability.summary}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {capability.points.map((point) => (
                  <Badge
                    key={point}
                    variant="secondary"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.16em]"
                  >
                    {point}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function SelectedWorkSection({
  projects,
  onOpenProject,
}: {
  projects: Project[];
  onOpenProject: (slug: string) => void;
}) {
  return (
    <SectionShell id="work">
      <SectionHeading
        eyebrow="Selected Work"
        title="Compact case studies with signal visible before the click."
        description="Each card leads with a visual, a tighter summary, and a document signal. The deeper case study opens only when a visitor chooses to go further, so the homepage stays compact and easy to scan."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <div key={project.slug}>
            <ProjectPreviewCard project={project} onOpen={onOpenProject} />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Skills"
        title="Skills grouped by how they help the work move."
        description="This section stays intentionally compressed: broad enough to signal range, narrow enough to avoid looking unfocused."
      />

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {groups.map((group) => (
          <Card key={group.category} className="surface-panel">
            <CardContent className="space-y-5 p-6">
              <div className="space-y-3">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  {group.category}
                </p>
                <p className="text-sm leading-7 text-foreground/68">{group.summary}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={
                      group.category === "Technical"
                        ? "rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 font-code text-xs text-foreground/82"
                        : "rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 font-sans text-xs font-medium text-foreground/82"
                    }
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}

function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <SectionShell id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="A light timeline that shows how the work stacks up."
        description="This is not meant to replace the resume. It gives enough context to show the environments, responsibilities, and impact themes behind the portfolio."
      />

      <div className="mt-10 space-y-5">
        {experiences.map((experience) => (
          <div key={`${experience.company}-${experience.role}`} className="surface-panel relative rounded-[1.75rem] p-6 pl-10">
            <div className="absolute bottom-6 left-4 top-6 w-px bg-white/10" />
            <div className="absolute left-[13px] top-8 h-3 w-3 rounded-full bg-cyan-300" />

            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge
                    variant="secondary"
                    className="rounded-full px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.16em]"
                  >
                    {experience.lane}
                  </Badge>
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                    {experience.duration}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-3xl leading-none text-foreground">{experience.role}</h3>
                  <p className="mt-1 text-sm leading-7 text-muted-foreground">{experience.company}</p>
                </div>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-foreground/85">{experience.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function ResumeSection({
  note,
  viewUrl,
  downloadUrl,
}: {
  note: string;
  viewUrl?: string;
  downloadUrl?: string;
}) {
  return (
    <SectionShell id="resume">
      <div className="surface-panel rounded-[2rem] p-6 sm:p-8">
        <SectionHeading
          eyebrow="Resume"
          title="A supporting document, not the first impression."
          description="The homepage carries the core signal. The resume is available as a second layer for recruiters or hiring managers who want the traditional format as well."
        />

        <div className="surface-soft mt-8 flex flex-col gap-6 rounded-[1.5rem] p-5 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-foreground/68">{note}</p>

          <div className="flex flex-col gap-3 sm:flex-row">
            {viewUrl ? (
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <a href={viewUrl} target="_blank" rel="noreferrer">
                  View Resume
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button size="lg" variant="outline" className="rounded-full px-6" disabled>
                View Resume
              </Button>
            )}

            {downloadUrl ? (
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={downloadUrl} download>
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button size="lg" className="rounded-full px-6" disabled>
                Download Resume
              </Button>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ContactSection({
  email,
  linkedInUrl,
  location,
}: {
  email: string;
  linkedInUrl: string;
  location: string;
}) {
  return (
    <SectionShell id="contact">
      <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <div className="rounded-[2rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.10] via-white/[0.04] to-white/[0.02] p-6 text-foreground shadow-[0_24px_90px_rgba(0,0,0,0.36)] sm:p-8">
          <div className="space-y-5">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-cyan-200/72">Contact</p>
            <h2 className="font-display text-5xl leading-none tracking-tight sm:text-6xl">
              If there&apos;s a role to shape, let&apos;s talk.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-foreground/78">
              The site is built to make the first decision easier. If you want the deeper discussion on a role,
              product, or case study, email is the fastest path.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href={`mailto:${email}`}>
                  Email Me
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <a href={linkedInUrl} target="_blank" rel="noreferrer">
                  LinkedIn
                  <MoveRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <Card className="surface-panel">
            <CardContent className="space-y-4 p-6">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Primary contact
              </p>
              <a
                href={`mailto:${email}`}
                className="font-display text-4xl leading-none text-foreground transition-colors hover:text-cyan-200"
              >
                {email}
              </a>
              <p className="text-sm leading-7 text-foreground/68">
                Best for role conversations, portfolio walkthroughs, or requests for more detailed artifacts.
              </p>
            </CardContent>
          </Card>

          <Card className="surface-panel">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em]">{location}</p>
              </div>
              <p className="text-sm leading-7 text-foreground/85">
                Built as a static portfolio so it stays fast, easy to maintain, and ready to send with any application.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionShell>
  );
}
