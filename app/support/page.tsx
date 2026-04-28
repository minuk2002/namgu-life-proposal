'use client';

import { FormEvent, useState } from 'react';
import { SectionIntro } from '@/components/SectionIntro';
import { PrivacyConsent } from '@/components/PrivacyConsent';
import { publicSupportMessages } from '@/data/siteContent';

export default function SupportPage() {
  const [done, setDone] = useState(false);
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    await fetch('/api/support', { method: 'POST', body: JSON.stringify(data), headers: { 'Content-Type': 'application/json' } });
    setDone(true);
    form.reset();
  }

  return (
    <section className="container-base py-14 space-y-8">
      <div>
        <SectionIntro eyebrow="응원하기" title="따뜻한 응원을 남겨주세요" description="공개 동의된 메시지는 운영자 승인 후 노출됩니다." />
        <div className="grid gap-4 md:grid-cols-3">
          {publicSupportMessages.map((item) => (
            <article key={item.id} className="card">
              <p className="text-sm text-slate-700">“{item.message}”</p>
              <p className="mt-2 text-xs text-slate-500">{item.name} · {item.district}</p>
            </article>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="card grid gap-3">
        <input name="name" placeholder="이름/닉네임(선택)" className="rounded-xl border border-slate-300 p-2" />
        <select name="district" className="rounded-xl border border-slate-300 p-2"><option>대명6동</option><option>대명9동</option><option>대명11동</option><option>기타</option></select>
        <textarea required name="message" rows={4} placeholder="응원 메시지" className="rounded-xl border border-slate-300 p-2" />
        <label className="text-sm"><input type="checkbox" name="publicConsent" className="mr-2" />공개 동의 (승인 후 공개)</label>
        <PrivacyConsent requiredName="privacy" />
        <button className="rounded-xl bg-primary-700 px-4 py-2 font-medium text-white">응원 남기기</button>
        {done ? <p className="text-sm text-primary-700">응원 메시지가 접수되었습니다. 감사합니다.</p> : null}
      </form>
    </section>
  );
}
