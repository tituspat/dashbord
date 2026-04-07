import { ArrowUpRight, FileText } from "lucide-react";

import { ProjectCoverArt } from "@/components/project-cover-art";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/site";

const categoryStyles: Record<Project["category"], string> = {
  Product: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  "Business / Strategy": "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  Technical: "border-amber-400/20 bg-amber-400/10 text-amber-200",
};

type ProjectPreviewCardProps = {
  project: Project;
  onOpen: (slug: string) => void;
  featured?: boolean;
};

export function ProjectPreviewCard({
  project,
  onOpen,
  featured = false,
}: ProjectPreviewCardProps) {
  const documentLabel = project.documentLabel ?? (project.prdUrl ? "Document" : null);

  return (
    <button
      type="button"
      onClick={() => onOpen(project.slug)}
      aria-haspopup="dialog"
      className="group w-full text-left"
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden border-white/10 bg-white/[0.04] shadow-[0_32px_120px_rgba(0,0,0,0.38)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.055] hover:shadow-[0_40px_140px_rgba(0,0,0,0.45)]",
          featured ? "min-h-[32rem]" : "min-h-[30rem]",
        )}
      >
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
        <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-cyan-300/10 blur-3xl transition-transform duration-500 group-hover:scale-125" />

        <div className="relative flex h-full flex-col p-4 sm:p-5">
          <div className="relative">
            <ProjectCoverArt
              project={project}
              className={cn(
                "aspect-[16/10] transition duration-500 group-hover:scale-[1.02]",
                featured && "lg:aspect-[16/9]",
              )}
            />

            <div className="absolute left-3 top-3">
              <Badge
                className={cn(
                  "rounded-full border px-3 py-1 font-sans text-[10px] font-medium uppercase tracking-[0.18em] shadow-[0_10px_25px_rgba(0,0,0,0.25)] backdrop-blur-md",
                  categoryStyles[project.category],
                )}
              >
                {project.category}
              </Badge>
            </div>

            {documentLabel ? (
              <div className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(0,0,0,0.25)] backdrop-blur-md">
                <FileText className="h-3.5 w-3.5 text-cyan-200" />
                <span>{documentLabel}</span>
              </div>
            ) : null}
          </div>

          <div className="flex flex-1 flex-col justify-between gap-5 px-1 pb-1 pt-5">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="max-w-3xl font-display text-[1.8rem] leading-[1.05] tracking-tight text-foreground sm:text-[2.1rem]">
                  {project.title}
                </h3>
                <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{project.previewHook}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.previewImpact.slice(0, 2).map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
                  >
                    <p className="font-sans text-xs font-semibold text-foreground">{metric.value}</p>
                    <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between rounded-[1rem] border border-white/10 bg-black/25 px-4 py-3 transition-colors duration-300 group-hover:border-white/15 group-hover:bg-black/32">
              <div className="space-y-1">
                <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Compact case study
                </p>
                <p className="text-sm text-foreground">View details</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </Card>
    </button>
  );
}
