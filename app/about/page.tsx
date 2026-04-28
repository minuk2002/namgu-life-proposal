import { SectionIntro } from '@/components/SectionIntro';

export default function AboutPage() {
  return (
    <section className="container-base py-14">
      <SectionIntro
        eyebrow="강민욱 소개"
        title="실무형 생활정치를 해온 사람"
        description="강민욱 의원은 현직 남구의원으로서 조례·예산·행정감시·현장민원 해결을 중심으로 의정활동을 이어오고 있습니다."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ['정치 철학', '보여주기보다 챙기는 정치, 말보다 실천하는 책임정치를 기준으로 삼습니다.'],
          ['의정 방식', '현장을 듣고 데이터로 정리한 뒤, 조례·예산·행정 개선으로 연결합니다.'],
          ['주민 약속', '주민 가까이에서 듣고, 처리 경과를 끝까지 공유하겠습니다.'],
          ['활동 중점', '생활안전·복지·청년·주거·골목환경 등 생활밀착 과제를 우선합니다.']
        ].map(([title, desc]) => (
          <article key={title} className="card">
            <h3 className="mb-2 font-semibold text-primary-700">{title}</h3>
            <p className="text-sm text-slate-600">{desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
