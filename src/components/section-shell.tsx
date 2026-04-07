import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SectionShellProps = HTMLAttributes<HTMLElement> & {
  id?: string;
};

export function SectionShell({ className, children, id, ...props }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8", className)}
      {...props}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
