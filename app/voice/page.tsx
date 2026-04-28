'use client';

import { FormEvent, useState } from 'react';
import { SectionIntro } from '@/components/SectionIntro';
import { PrivacyConsent } from '@/components/PrivacyConsent';

export default function VoicePage() {
  const [done, setDone] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    await fetch('/api/voice', { method: 'POST', body: JSON.stringify(Object.fromEntries(formData)), headers: { 'Content-Type': 'application/json' } });
    setDone(true);
    form.reset();
  }

  return (
    <section className="container-base py-14">
      <SectionIntro eyebrow="주민 의견 남기기" title="비공개 접수형 제안 창구" description="작성해 주신 의견은 공개되지 않으며, 운영자만 확인합니다." />
      <form onSubmit={handleSubmit} className="card grid gap-3">
        <input required name="name" placeholder="이름 또는 닉네임" className="rounded-xl border border-slate-300 p-2" />
        <input name="contact" placeholder="연락처(선택)" className="rounded-xl border border-slate-300 p-2" />
        <select name="district" required className="rounded-xl border border-slate-300 p-2">
          <option value="">거주 동 선택</option>
          <option>대명6동</option><option>대명9동</option><option>대명11동</option><option>기타</option>
        </select>
        <select name="type" required className="rounded-xl border border-slate-300 p-2">
          <option value="">유형 선택</option>
          <option>생활민원</option><option>정책제안</option><option>응원/격려</option><option>비공개 제보</option><option>행사/참여 문의</option><option>자원봉사 관심</option>
        </select>
        <input required name="title" placeholder="제목" className="rounded-xl border border-slate-300 p-2" />
        <textarea required name="content" placeholder="내용" rows={6} className="rounded-xl border border-slate-300 p-2" />
        <label className="text-sm"><input type="checkbox" name="replyRequested" className="mr-2" />회신을 희망합니다</label>
        <PrivacyConsent requiredName="privacy" />
        <button className="rounded-xl bg-primary-700 px-4 py-2 font-medium text-white">비공개로 접수하기</button>
        {done ? <p className="text-sm text-primary-700">소중한 의견 감사합니다. 운영자가 확인 후 검토하겠습니다.</p> : null}
      </form>
    </section>
  );
}
