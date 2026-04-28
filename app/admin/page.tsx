'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const params = useSearchParams();

  const nextPath = params.get('next') ?? '/admin/mock-data';

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });

    if (!response.ok) {
      setError('비밀번호가 올바르지 않습니다.');
      setLoading(false);
      return;
    }

    router.push(nextPath);
    router.refresh();
  }

  return (
    <section className="container-base py-16">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold">관리자 로그인</h1>
        <p className="mt-2 text-sm text-slate-600">/admin 하위 페이지는 비공개 보호가 적용됩니다.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-3">
          <label className="block text-sm font-medium">관리자 비밀번호</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-2"
            placeholder="비밀번호 입력"
          />
          <button disabled={loading} className="w-full rounded-xl bg-primary-700 px-4 py-2 text-white disabled:opacity-70">
            {loading ? '확인 중...' : '로그인'}
          </button>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
        </form>
      </div>
    </section>
  );
}
