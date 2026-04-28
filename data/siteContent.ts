import { ArchiveItem, DistrictPlan, NewsItem, Vision } from '@/lib/types';

export const navItems = [
  { href: '/', label: '홈' },
  { href: '/about', label: '강민욱 소개' },
  { href: '/archive', label: '의정활동 아카이브' },
  { href: '/policies', label: '공약/정책' },
  { href: '/districts', label: '동별 제안과 약속' },
  { href: '/voice', label: '주민 의견 남기기' },
  { href: '/support', label: '응원하기' },
  { href: '/join', label: '함께하기' },
  { href: '/news', label: '공지/소식' }
] as const;

export const keyAchievements = [
  '1인가구 지원 조례',
  '사회복지사 처우 및 지위 향상 조례',
  '아동·청소년 채무 대물림 방지 법률지원 조례',
  '재난극복 및 민생경제 활성화 지원 조례',
  '노인 일자리 및 사회활동 지원 조례',
  '전세사기 피해자 지원 및 주거안정 조례',
  '민원실 설치 및 운영 조례'
];

export const visions: Vision[] = [
  {
    title: '더 안전하고 더 편리한 생활남구',
    description: '골목부터 큰 도로까지, 일상 동선을 안전하게 바꾸겠습니다.',
    promises: ['보행약자 중심 교차로 개선', '노후 골목길 조도 보강', '생활 SOC 점검 시스템', '재난 대응 안내 체계 고도화']
  },
  {
    title: '돌봄과 복지가 살아있는 따뜻한 남구',
    description: '아이부터 어르신까지 사각지대를 줄이는 복지를 추진합니다.',
    promises: ['동네 돌봄 연계 강화', '어르신 생활안전망 확대', '복지 현장 인력 지원 강화', '위기가구 조기 발굴 체계']
  },
  {
    title: '청년이 머물고 도전할 수 있는 남구',
    description: '주거·일자리·활동 기반을 촘촘히 연결하겠습니다.',
    promises: ['청년 생활안정 정보허브 운영', '청년 제안 실험사업', '로컬 창업 연계 프로그램', '청년 주거상담 확대']
  },
  {
    title: '말보다 실행하는 책임정치',
    description: '약속의 진행상황을 기록하고 결과로 답하겠습니다.',
    promises: ['공약 이행 점검 공개', '정례 주민간담회 운영', '민원처리 경과 피드백', '예산·조례 성과 데이터화']
  }
];

export const archiveItems: ArchiveItem[] = [
  {
    id: 'arc-1',
    title: '남구 1인가구 생활안전 지원 조례 발의',
    summary: '안전키트·정보제공·위기연계 체계를 담은 생활밀착형 조례를 대표 발의했습니다.',
    date: '2026-02-14',
    category: '조례',
    tags: ['1인가구', '안전', '복지']
  },
  {
    id: 'arc-2',
    title: '대명11동 보행약자 이동동선 개선 구정질문',
    summary: '경사로·횡단보도 신호시간·정류장 접근성 개선을 위한 구정질문을 진행했습니다.',
    date: '2026-01-22',
    category: '구정질문',
    tags: ['어르신', '안전', '골목길/보행']
  },
  {
    id: 'arc-3',
    title: '청년 주거위기 대응 정책토론회 개최',
    summary: '전세사기·주거불안 대응을 위한 법률·행정·복지 연계 방안을 토론했습니다.',
    date: '2025-11-03',
    category: '토론회/간담회',
    tags: ['청년', '복지', '민원 해결']
  },
  {
    id: 'arc-4',
    title: '대명6동 골목 환경개선 현장점검',
    summary: '야간 조명, 배수, 보행 장애물 정비를 위한 현장 민원점검을 실시했습니다.',
    date: '2025-09-19',
    category: '현장활동',
    tags: ['골목길/보행', '민원 해결', '안전']
  },
  {
    id: 'arc-5',
    title: '사회복지사 처우개선 조례 성과 브리핑',
    summary: '복지현장 종사자 권익 강화를 위한 조례 이행 현황을 브리핑했습니다.',
    date: '2025-07-10',
    category: '보도자료',
    tags: ['복지', '노동/인권']
  },
  {
    id: 'arc-6',
    title: '대명9동 상권·보행 동선 주민 간담회 기록',
    summary: '상권 접근성과 보행 안전을 주제로 주민 의견을 수렴했습니다.',
    date: '2025-06-04',
    category: '사진기록',
    tags: ['골목길/보행', '민원 해결']
  }
];

export const districtPlans: DistrictPlan[] = [
  {
    district: '대명6동',
    issues: ['골목길 보행 안전', '노후 생활 인프라', '주거환경 정비'],
    promises: ['야간 보행환경 개선사업 확대', '소규모 생활개선 예산 상시화', '주민 제안 기반 골목 인프라 개선']
  },
  {
    district: '대명9동',
    issues: ['생활편의시설 접근성', '골목 환경', '상권 이동동선'],
    promises: ['생활편의 거점 연계 강화', '골목 환경 정비 정례 점검', '상권 동선 개선 협의체 운영']
  },
  {
    district: '대명11동',
    issues: ['세대별 맞춤 정책 필요', '돌봄/안전/주거 통합 접근', '교통약자 편의'],
    promises: ['통합생활지원 패키지 추진', '교통약자 이동지원 시설 확대', '공동체 회복 프로그램 지원']
  }
];

export const publicSupportMessages = [
  { id: 'sup-1', name: '대명9동 주민', district: '대명9동', message: '골목길 문제를 빠르게 챙겨주셔서 고맙습니다.' },
  { id: 'sup-2', name: '청년 자영업자', district: '대명6동', message: '말보다 실행하는 모습이 믿음직합니다.' },
  { id: 'sup-3', name: '학부모', district: '대명11동', message: '아이들 통학 안전 개선에 힘써주셔서 감사합니다.' }
];

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    type: '공지',
    title: '5월 생활민원 집중 접수 주간 운영 안내',
    summary: '대명6·9·11동 생활불편 사항을 집중 접수하고 현장 점검 일정을 공지합니다.',
    date: '2026-04-20'
  },
  {
    id: 'news-2',
    type: '활동소식',
    title: '대명11동 어르신 보행안전 간담회 진행',
    summary: '보행 취약구간 개선 요청을 바탕으로 관계부서 협의를 시작했습니다.',
    date: '2026-04-11'
  },
  {
    id: 'news-3',
    type: '보도자료',
    title: '청년 주거불안 대응 정책 제안 발표',
    summary: '상담·법률연계·주거정보 지원을 묶은 지역형 정책 모델을 제시했습니다.',
    date: '2026-03-28'
  }
];
