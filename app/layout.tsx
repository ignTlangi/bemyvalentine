import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const quicksand = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Be My Valentine? 💕',
  description: 'A special Valentine\'s Day question just for you!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={quicksand.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
