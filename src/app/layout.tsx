import { type Metadata } from 'next';
import '@/styles/global.css';
import { inter } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'CSP (Content Security Policy)',
  description: 'CSP (Content Security Policy) on NextJs',
  icons: {
    icon: '/assets/favicon.png'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
