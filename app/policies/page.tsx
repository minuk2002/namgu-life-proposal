import { SectionIntro } from '@/components/SectionIntro';
import { visions } from '@/data/siteContent';

export default function PoliciesPage() {
  return (
    <section className="container-base py-14">
      <SectionIntro eyebrow="공약/정책" title="공통 공약 4대 비전" description="생활남구를 위한 핵심 약속을 비전별로 정리했습니다." />
      <div className="space-y-4">
        {visions.map((vision) => (
          <article key={vision.title} className="card">
            <h3 className="font-semibold text-primary-700">{vision.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{vision.description}</p>
            <ul className="mt-3 grid list-disc gap-1 pl-5 text-sm text-slate-700 md:grid-cols-2">
              {vision.promises.map((promise) => (
                <li key={promise}>{promise}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
