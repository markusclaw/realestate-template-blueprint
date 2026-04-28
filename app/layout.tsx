import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Real Estate Template Blueprint',
  description: 'Config-Driven Multi-Client Architecture — Version 2.0',
  robots: 'noindex, nofollow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          {children}
        </div>
      </body>
    </html>
  );
}
