'use client';

import { ArrowUpRight, ExternalLink, FileText } from 'lucide-react';

import { ProjectCoverArt } from '@/components/project-cover-art';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/site';

type ProjectDetailOverlayProps = {
  project: Project | null;
  onClose: () => void;
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{children}</p>;
}

function CompactPanel({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-[1.15rem] border border-white/10 bg-white/[0.03] p-4">
      <SectionLabel>{label}</SectionLabel>
      <p className="mt-3 text-sm leading-6 text-foreground/82">{body}</p>
    </div>
  );
}

function DocumentChip({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] backdrop-blur-md',
        className,
      )}
    >
      <FileText className="h-3.5 w-3.5 text-cyan-200" />
      <span>{label}</span>
    </div>
  );
}

function DetailsRail({ project }: { project: Project }) {
  const impactHighlights = project.impactHighlights && project.impactHighlights.length > 0 ? project.impactHighlights : project.impactMetrics.map((metric) => `${metric.value} ${metric.label}`);

  return (
    <div className="space-y-4">
      {project.tools && project.tools.length > 0 ? (
        <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
          <SectionLabel>Tools & Technologies</SectionLabel>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="rounded-full border border-cyan-300/10 bg-cyan-300/[0.08] px-3 py-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-cyan-100">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}

      <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
        <SectionLabel>Impact & Results</SectionLabel>
        <ul className="mt-3 space-y-3">
          {impactHighlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-foreground/82">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {project.impactMetrics.map((metric) => (
          <div key={metric.label} className="rounded-[1.15rem] border border-white/10 bg-white/[0.04] p-4">
            <p className="font-display text-3xl leading-none text-foreground">{metric.value}</p>
            <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-4">
        <SectionLabel>Supporting Document</SectionLabel>
        <p className="mt-3 text-sm leading-6 text-foreground/72">Keep the homepage compact, then let visitors open the artifact only when they want more detail.</p>
        <div className="mt-4">
          {project.prdUrl ? (
            <Button asChild variant="secondary" className="w-full rounded-full px-5">
              <a href={project.prdUrl} target="_blank" rel="noreferrer">
                View Full PRD
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : (
            <Button disabled variant="secondary" className="w-full rounded-full px-5">
              View Full PRD
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectBody({ project }: { project: Project }) {
  const documentLabel = project.documentLabel ?? (project.prdUrl ? 'Document' : 'Case Study');

  return (
    <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-foreground shadow-none">{project.category}</Badge>
            <DocumentChip label={documentLabel} />
          </div>

          <div className="space-y-2">
            <h3 className="max-w-3xl font-display text-3xl leading-[1.02] tracking-tight text-foreground sm:text-[2.55rem]">{project.title}</h3>
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground sm:text-base">{project.previewHook}</p>
          </div>
        </div>

        <ProjectCoverArt project={project} className="aspect-[16/10] sm:aspect-[16/9]" />

        <div className="grid gap-4 md:grid-cols-2">
          <CompactPanel label="Context" body={project.problem} />
          <CompactPanel label="My Role" body={project.previewRole} />
        </div>

        <CompactPanel label="Working Context" body={project.contextRole} />

        <div className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4">
          <SectionLabel>Approach</SectionLabel>
          <div className="mt-4 space-y-3">
            {project.solution.map((item, index) => (
              <div key={item} className="rounded-[1rem] border border-white/10 bg-black/15 p-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/12 font-sans text-xs font-semibold text-cyan-200">{index + 1}</span>
                  <p className="text-sm leading-6 text-foreground/82">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <aside className="lg:sticky lg:top-0">
        <DetailsRail project={project} />
      </aside>
    </div>
  );
}

export function ProjectDetailOverlay({ project, onClose }: ProjectDetailOverlayProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (!project) {
    return null;
  }

  const topNote = (
    <div className="flex items-center gap-2 text-sm text-foreground/72">
      <ArrowUpRight className="h-4 w-4 text-cyan-300" />
      <span>Visual summary first. Document second.</span>
    </div>
  );

  if (isDesktop) {
    return (
      <Dialog open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
        <DialogContent className="max-h-[88vh] overflow-y-auto border-white/10 bg-[#0b1018]/95 p-0 sm:max-w-5xl">
          <DialogHeader className="border-b border-white/10 px-8 pb-5 pt-6 text-left">
            {topNote}
            <DialogTitle className="sr-only">{project.title}</DialogTitle>
            <DialogDescription className="sr-only">{project.previewHook}</DialogDescription>
          </DialogHeader>
          <div className="px-8 py-8">
            <ProjectBody project={project} />
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={Boolean(project)} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="max-h-[92vh] border-white/10 bg-[#0b1018]/95">
        <DrawerHeader className="px-5 pb-4 text-left">
          {topNote}
          <DrawerTitle className="sr-only">{project.title}</DrawerTitle>
          <DrawerDescription className="sr-only">{project.previewHook}</DrawerDescription>
        </DrawerHeader>
        <div className="overflow-y-auto px-5 pb-8">
          <ProjectBody project={project} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
