import { SectionIntro } from '@/components/SectionIntro';
import { newsItems } from '@/data/siteContent';

export default function NewsPage() {
  return (
    <section className="container-base py-14">
      <SectionIntro eyebrow="공지/소식" title="공지사항 · 보도자료 · 활동 소식" description="초기 MVP는 더미 데이터 기반이며 추후 CMS/MD 구조로 확장 가능합니다." />
      <div className="space-y-4">
        {newsItems.map((item) => (
          <article key={item.id} className="card">
            <div className="mb-2 flex items-center gap-2 text-xs">
              <span className="rounded-full bg-primary-50 px-2 py-1 font-semibold text-primary-700">{item.type}</span>
              <span className="text-slate-500">{item.date}</span>
            </div>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
