import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import './globals.css';

const sansFont = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const codeFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-code',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'Titus Patrick | Product, Business, and Technical Portfolio',
  description: "A compact portfolio website designed to help hiring managers scan Titus Patrick's product, business, and technical work in under a minute.",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${codeFont.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
