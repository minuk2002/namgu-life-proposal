import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: '남구생활제안소 | 강민욱 의원 공식 플랫폼',
  description: '남구 주민의 의견이 쌓이고, 강민욱의 활동이 증명되는 플랫폼',
  openGraph: {
    title: '남구생활제안소',
    description: '의정활동 아카이브 + 주민 제안 플랫폼 + 응원/참여 시스템',
    type: 'website',
    locale: 'ko_KR'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
