import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Designer Page - Ultra Modern Landing',
  description:
    'Uma landing page ultra moderna e responsiva, pronta para converter',
  keywords: ['landing page', 'design moderno', 'convertador'],
  authors: [{ name: 'Mateus Campos' }],
  creator: 'Mateus Campos',
  openGraph: {
    type: 'website',
    locale: 'pt_PT',
    url: 'https://example.com',
    siteName: 'Designer Page',
    title: 'Designer Page - Ultra Modern Landing',
    description: 'Uma landing page ultra moderna e responsiva, pronta para converter',
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
