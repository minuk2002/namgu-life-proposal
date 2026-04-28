import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';
import { districtPlans } from '@/data/siteContent';

export default function DistrictsPage() {
  return (
    <section className="container-base py-14">
      <SectionIntro eyebrow="동별 제안과 약속" title="대명6·9·11동 맞춤 생활공약" description="동별 현안을 분리해 보고, 앞으로의 약속을 확인할 수 있습니다." />
      <div className="grid gap-4 lg:grid-cols-3">
        {districtPlans.map((plan) => (
          <article key={plan.district} className="card space-y-4">
            <h3 className="text-lg font-semibold text-primary-700">{plan.district}</h3>
            <div>
              <h4 className="mb-1 text-sm font-semibold">현안</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                {plan.issues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-semibold">앞으로의 약속</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                {plan.promises.map((promise) => (
                  <li key={promise}>{promise}</li>
                ))}
              </ul>
            </div>
            <Link href="/voice" className="inline-block rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium">
              제안 남기기
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
