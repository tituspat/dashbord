import { cn } from '@/lib/utils';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl space-y-4', className)}>
      <p className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      <div className="space-y-3">
        <h2 className="font-display text-4xl leading-none tracking-tight text-foreground sm:text-5xl">{title}</h2>
        <p className="max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{description}</p>
      </div>
    </div>
  );
}
