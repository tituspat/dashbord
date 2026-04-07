import Link from 'next/link';

import { Button } from '@/components/ui/button';

const navigation = [
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

type SiteHeaderProps = {
  name: string;
};

export function SiteHeader({ name }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="font-sans text-xs font-medium uppercase tracking-[0.18em] text-foreground/92">
          {name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="font-sans text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm" className="rounded-full px-5">
          <Link href="#contact">Let&apos;s Talk</Link>
        </Button>
      </div>
    </header>
  );
}
