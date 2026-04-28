'use client';

import { useRouter } from 'next/navigation';

const sections = [
  { title: '주민 의견', endpoint: '/api/voice' },
  { title: '응원 비공개 메시지', endpoint: '/api/support' },
  { title: '함께하기 신청자', endpoint: '/api/join' },
  { title: '행사/정책 관심자', endpoint: '/api/join?type=interest' }
];

export default function AdminMockPage() {
  const router = useRouter();

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
    router.refresh();
  }

  return (
    <section className="container-base py-14">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h1 className="section-title">관리자용 비공개 의견 확인 구조(목업)</h1>
        <button onClick={logout} className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium">
          로그아웃
        </button>
      </div>
      <p className="mt-2 text-slate-600">실제 인증은 MVP 단계 비밀번호 보호 방식이며, 추후 Supabase Auth/NextAuth 연동으로 확장 가능합니다.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="card">
            <h2 className="font-semibold text-primary-700">{section.title}</h2>
            <p className="mt-1 text-sm text-slate-600">연결 예정 API: {section.endpoint}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
