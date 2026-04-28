import Image from 'next/image';
import Link from 'next/link';
import { SectionIntro } from '@/components/SectionIntro';
import { keyAchievements, newsItems, visions } from '@/data/siteContent';

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-gradient-to-b from-primary-50 to-white py-14">
        <div className="container-base grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            <p className="text-sm font-semibold text-primary-700">남구생활제안소</p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">단디 듣고, 똑디 바꾸고</h1>
            <p className="text-lg text-slate-700">주민 가까이에서, 결과로 답하겠습니다.</p>
            <p className="text-slate-600">남구 주민의 의견이 쌓이고, 강민욱의 활동이 증명되는 생활정치 플랫폼입니다.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/archive" className="rounded-xl bg-primary-700 px-4 py-2 text-white">
                의정활동 보기
              </Link>
              <Link href="/voice" className="rounded-xl border border-slate-300 px-4 py-2">
                의견 남기기
              </Link>
              <Link href="/support" className="rounded-xl border border-slate-300 px-4 py-2">
                응원하기
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="강민욱 의원 활동 이미지 플레이스홀더"
              width={1200}
              height={800}
              className="h-[340px] w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="container-base py-14">
        <SectionIntro
          title="남구생활제안소 소개"
          description="남구생활제안소는 강민욱 의원의 의정활동을 기록하고, 주민의 의견과 제안을 모아 더 나은 남구를 함께 만드는 공간입니다."
        />
      </section>

      <section className="container-base py-6">
        <SectionIntro title="한눈에 보는 강민욱" description="생활 가까운 정치, 실무형 의정, 끝까지 책임지는 현직 남구의원." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {[
            '현직 남구의원',
            '생활밀착형 조례 제정',
            '예산 심의와 행정감시',
            '주민 민원 해결과 현장 활동',
            '2025년 제17회 지방의원 약속대상 공약이행분야 최우수상'
          ].map((item) => (
            <div key={item} className="card text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="container-base py-14">
        <SectionIntro title="대표 성과" description="보여주기보다 챙기는 정치, 생활을 바꾸는 조례와 실천을 쌓아왔습니다." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {keyAchievements.map((item) => (
            <article key={item} className="card">
              <h3 className="font-semibold text-slate-900">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="container-base py-6">
        <SectionIntro title="공약 4대 비전" description="긴 문장이 아닌 실행 중심 약속으로 정리했습니다." />
        <div className="grid gap-4 md:grid-cols-2">
          {visions.map((vision) => (
            <article key={vision.title} className="card space-y-3">
              <h3 className="font-semibold text-primary-700">{vision.title}</h3>
              <p className="text-sm text-slate-600">{vision.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-base py-14">
        <SectionIntro title="주민 참여" description="의견, 응원, 참여 신청을 통해 생활정치를 함께 만듭니다." />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { href: '/voice', label: '주민 의견 남기기' },
            { href: '/support', label: '응원하기' },
            { href: '/join', label: '함께하기' }
          ].map((item) => (
            <Link key={item.href} href={item.href} className="card font-semibold text-primary-700 transition hover:bg-primary-50">
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-base py-6">
        <SectionIntro title="최근 활동/소식" description="최근 공지와 활동 소식을 빠르게 확인하세요." />
        <div className="grid gap-4 md:grid-cols-3">
          {newsItems.map((item) => (
            <article key={item.id} className="card space-y-2">
              <p className="text-xs font-semibold text-primary-700">{item.type}</p>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
