import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Designer Studio - Design Moderno & Web Development',
  description:
    'Studio de design e desenvolvimento web. Criamos experiências digitais únicas, modernas e eficientes para sua marca.',
  keywords: ['design', 'web development', 'studio', 'portugal', 'moderno'],
  authors: [{ name: 'Designer Studio' }],
  creator: 'Designer Studio',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://example.com',
    siteName: 'Designer Studio',
    title: 'Designer Studio - Design Moderno & Web Development',
    description: 'Studio de design e desenvolvimento web. Criamos experiências digitais únicas, modernas e eficientes.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
