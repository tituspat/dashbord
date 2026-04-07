import { BarChart3, ShieldAlert } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Project } from "@/types/site";

type ProjectCoverArtProps = {
  project: Pick<Project, "category" | "coverStyle">;
  className?: string;
};

const defaultCoverByCategory: Record<Project["category"], string> = {
  Product: "signal-breach",
  "Business / Strategy": "graph-paper",
  Technical: "dashboard-grid",
};

function SignalBreachCover() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#7a6358_0%,#132236_36%,#12263b_62%,#1d3140_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(255,255,255,0.26),transparent_26%),radial-gradient(circle_at_73%_28%,rgba(244,114,182,0.32),transparent_18%),radial-gradient(circle_at_66%_56%,rgba(34,211,238,0.26),transparent_24%)]" />
      <div className="absolute inset-x-[11%] bottom-[16%] top-[12%] rounded-[1.4rem] border border-white/12 bg-[#09111b]/72 shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_40%,rgba(56,189,248,0.28),transparent_22%),radial-gradient(circle_at_58%_25%,rgba(236,72,153,0.3),transparent_16%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_40%)]" />
        <div className="absolute left-[52%] top-[40%] -translate-x-1/2 -translate-y-1/2 rounded-[1rem] border border-white/14 bg-black/28 px-4 py-3 text-center shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="flex items-center justify-center gap-2 text-white">
            <ShieldAlert className="h-4 w-4 text-cyan-200" />
            <p className="font-display text-4xl leading-none">404</p>
          </div>
          <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/70">Access flow interrupted</p>
        </div>
      </div>
      <div className="absolute bottom-[12%] left-[17%] right-[22%] h-[7%] rounded-full border border-white/8 bg-black/65" />
    </>
  );
}

function GraphPaperCover() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#4b3425_0%,#2f2119_38%,#1b1714_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_24%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.14),transparent_18%)]" />
      <div className="absolute left-[8%] top-[18%] h-[28%] w-[18%] -rotate-6 rounded-[0.8rem] bg-[#c6971c] shadow-[0_10px_20px_rgba(0,0,0,0.18)]" />
      <div className="absolute left-[44%] top-[13%] h-[10%] w-[38%] rotate-[22deg] rounded-full border border-white/24 bg-white/12" />
      <div className="absolute left-[36%] top-[18%] h-[56%] w-[46%] rounded-[1rem] border border-slate-300/35 bg-white/92 shadow-[0_30px_70px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-[10%] rounded-[0.7rem] border border-slate-300/55 bg-[linear-gradient(to_right,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:16%_18%]" />
        <div className="absolute inset-x-[20%] bottom-[32%] top-[36%]">
          <svg viewBox="0 0 100 60" className="h-full w-full text-slate-700">
            <path d="M5 45 L28 32 L46 34 L65 20 L82 24 L95 8" fill="none" stroke="currentColor" strokeWidth="2.4" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[19%] left-[27%] h-[22%] w-[2.6%] rotate-[38deg] rounded-full bg-[#171717]" />
      <div className="absolute bottom-[17%] left-[28%] h-[4.5%] w-[6.5%] rotate-[38deg] rounded-full bg-[#facc15]" />
    </>
  );
}

function DashboardGridCover() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#08111b_0%,#0f1f32_38%,#08111b_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:12%_18%]" />
      <div className="absolute left-[10%] top-[14%] h-[28%] w-[34%] rounded-[1rem] border border-cyan-300/20 bg-[#091421]/85 p-3 shadow-[0_20px_45px_rgba(0,0,0,0.28)]">
        <div className="mb-3 flex items-center gap-2 text-cyan-200/85">
          <BarChart3 className="h-4 w-4" />
          <div className="h-1.5 w-20 rounded-full bg-cyan-200/25" />
        </div>
        <div className="flex h-[65%] items-end gap-2">
          <div className="h-[40%] w-4 rounded-t-full bg-cyan-300/35" />
          <div className="h-[72%] w-4 rounded-t-full bg-cyan-300/55" />
          <div className="h-[55%] w-4 rounded-t-full bg-cyan-300/45" />
          <div className="h-[84%] w-4 rounded-t-full bg-cyan-300/80" />
        </div>
      </div>
      <div className="absolute right-[11%] top-[18%] h-[22%] w-[26%] rounded-[1rem] border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm">
        <div className="space-y-2">
          <div className="h-2 rounded-full bg-white/20" />
          <div className="h-2 w-[78%] rounded-full bg-white/15" />
          <div className="h-2 w-[56%] rounded-full bg-cyan-200/25" />
        </div>
      </div>
      <div className="absolute bottom-[14%] left-[14%] right-[14%] h-[28%] rounded-[1.1rem] border border-white/10 bg-[#0b1724]/86 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.24)]">
        <div className="mb-3 flex items-center justify-between">
          <div className="h-2 w-28 rounded-full bg-white/20" />
          <div className="h-5 w-5 rounded-full bg-emerald-300/70 shadow-[0_0_18px_rgba(110,231,183,0.5)]" />
        </div>
        <div className="grid h-[68%] grid-cols-3 gap-3">
          <div className="rounded-[0.8rem] bg-white/[0.06]" />
          <div className="rounded-[0.8rem] bg-cyan-300/[0.09]" />
          <div className="rounded-[0.8rem] bg-white/[0.06]" />
        </div>
      </div>
    </>
  );
}

export function ProjectCoverArt({ project, className }: ProjectCoverArtProps) {
  const coverStyle = project.coverStyle ?? defaultCoverByCategory[project.category];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#0b1119] shadow-[0_28px_90px_rgba(0,0,0,0.26)]",
        className,
      )}
    >
      {coverStyle === "signal-breach" && <SignalBreachCover />}
      {coverStyle === "graph-paper" && <GraphPaperCover />}
      {coverStyle === "dashboard-grid" && <DashboardGridCover />}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_28%,rgba(2,6,23,0.58)_100%)]" />
    </div>
  );
}
