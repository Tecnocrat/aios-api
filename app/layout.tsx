import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIOS API - Adaptive Intelligence Operating System',
  description: 'Infrastructure API for AIOS - Dynamic badges, stats, and architecture visualization',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
