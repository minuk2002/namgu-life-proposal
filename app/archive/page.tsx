'use client';

import { useMemo, useState } from 'react';
import { SectionIntro } from '@/components/SectionIntro';
import { archiveItems } from '@/data/siteContent';
import { ArchiveCategory, ArchiveTag } from '@/lib/types';

const categories: Array<ArchiveCategory | '전체'> = ['전체', '조례', '구정질문', '자유발언', '토론회/간담회', '현장활동', '보도자료', '사진기록'];
const tags: Array<ArchiveTag | '전체'> = ['전체', '1인가구', '청년', '어르신', '복지', '안전', '골목길/보행', '민원 해결', '노동/인권'];

export default function ArchivePage() {
  const [category, setCategory] = useState<(typeof categories)[number]>('전체');
  const [tag, setTag] = useState<(typeof tags)[number]>('전체');

  const filtered = useMemo(
    () => archiveItems.filter((item) => (category === '전체' || item.category === category) && (tag === '전체' || item.tags.includes(tag))),
    [category, tag]
  );

  return (
    <section className="container-base py-14">
      <SectionIntro eyebrow="의정활동 아카이브" title="무엇을 해왔는지 한눈에" description="카테고리와 주제 태그로 의정활동을 쉽게 찾아볼 수 있습니다." />
      <div className="mb-6 grid gap-3 md:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block font-medium">카테고리</span>
          <select className="w-full rounded-xl border border-slate-300 p-2" value={category} onChange={(e) => setCategory(e.target.value as ArchiveCategory | '전체')}>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block font-medium">태그</span>
          <select className="w-full rounded-xl border border-slate-300 p-2" value={tag} onChange={(e) => setTag(e.target.value as ArchiveTag | '전체')}>
            {tags.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <article key={item.id} className="card space-y-3">
            <p className="text-xs font-semibold text-primary-700">{item.category}</p>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.summary}</p>
            <p className="text-xs text-slate-500">{item.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
