import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description: 'Hubungi Printwork Indonesia untuk kebutuhan custom packaging Anda.',
};

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
