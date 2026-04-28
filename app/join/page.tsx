'use client';

import { FormEvent, useState } from 'react';
import { SectionIntro } from '@/components/SectionIntro';
import { PrivacyConsent } from '@/components/PrivacyConsent';

export default function JoinPage() {
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    await fetch('/api/join', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    setDone(true);
    form.reset();
  }

  return (
    <section className="container-base py-14">
      <SectionIntro eyebrow="함께하기" title="참여로 연결되는 생활정치" description="소식 수신, 자원봉사, 행사 참여, 정책 제안을 신청할 수 있습니다." />
      <form onSubmit={handleSubmit} className="card grid gap-3">
        <input name="name" required placeholder="이름" className="rounded-xl border border-slate-300 p-2" />
        <input name="contact" required placeholder="연락처" className="rounded-xl border border-slate-300 p-2" />
        <input name="region" required placeholder="거주 지역" className="rounded-xl border border-slate-300 p-2" />
        <fieldset>
          <legend className="mb-1 text-sm font-medium">관심 분야</legend>
          <div className="grid gap-2 sm:grid-cols-2 text-sm">
            {['청년', '복지/돌봄', '어르신', '골목상권', '주거/안전', '교육', '생활민원'].map((item) => (
              <label key={item}><input type="checkbox" name="interests" value={item} className="mr-2" />{item}</label>
            ))}
          </div>
        </fieldset>
        <select name="participationType" required className="rounded-xl border border-slate-300 p-2">
          <option value="">참여 형태 선택</option>
          <option>소식 받기</option><option>행사 참여</option><option>자원봉사</option><option>정책 제안</option>
        </select>
        <PrivacyConsent requiredName="privacy" />
        <button className="rounded-xl bg-primary-700 px-4 py-2 font-medium text-white">함께하기 신청</button>
        {done ? <p className="text-sm text-primary-700">참여 신청이 접수되었습니다. 감사합니다.</p> : null}
      </form>
    </section>
  );
}
