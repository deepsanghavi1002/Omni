import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Omni India | Private Proof of Personhood',
  description: 'India-only biometric passkey and proof-of-personhood platform with data stored within Indian borders.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
