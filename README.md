# 남구생활제안소 (namgu-life-proposal)

대구광역시 남구 다선거구(대명6·9·11동) 현직 지방의원 강민욱의 공식 정치 플랫폼 MVP입니다.

## 기술 스택
- Next.js (App Router) + TypeScript + Tailwind CSS
- 반응형 UI, 접근성 고려 라벨/시맨틱 태그 적용
- API Route 기반 mock submit 구조

## 실행 방법
```bash
npm install
npm run dev
```

## 구현된 메뉴
- 홈(`/`)
- 강민욱 소개(`/about`)
- 의정활동 아카이브(`/archive`)
- 공약/정책(`/policies`)
- 동별 제안과 약속(`/districts`)
- 주민 의견 남기기(`/voice`)
- 응원하기(`/support`)
- 함께하기(`/join`)
- 공지/소식(`/news`)
- 관리자용 비공개 의견 확인 구조 목업(`/admin/mock-data`)

## 콘텐츠 수정 포인트
- 네비게이션/성과/공약/아카이브/동별정보/응원글/소식: `data/siteContent.ts`
- 공통 타입: `lib/types.ts`
- 공통 UI 컴포넌트: `components/`
- 페이지별 문구 및 섹션: `app/**/page.tsx`

## 폼/API 확장 구조
- 주민 의견 접수: `POST /api/voice`
- 응원 접수(공개동의 분기 포함): `POST /api/support`
- 함께하기 접수: `POST /api/join`
- 현재는 JSON echo mock이며, 추후 DB 저장/관리자 인증 연결 가능

## npm 403 Forbidden 점검 결과
이번 환경에서는 `npm install` 시 403 오류가 발생했으며, 점검 결과는 아래와 같습니다.

- `package.json` 문법/의존성 선언 자체에는 문제 없음
- lock 파일(`package-lock.json`)은 아직 생성되지 않은 초기 상태
- 프로젝트에 `.npmrc`를 추가해 기본 registry를 `https://registry.npmjs.org/`로 고정함
- 다만 실행 환경의 프록시(`HTTP_PROXY/HTTPS_PROXY`)를 통하면 403, 프록시를 끄면 ENETUNREACH(외부망 미접속)라서 네트워크 정책 이슈가 핵심 원인

즉, 코드/패키지 파일 문제라기보다 **실행 환경의 네트워크/프록시 정책 문제**입니다.

## 초보자용 실행 가이드 (1단계씩)
아래는 로컬 PC(일반 인터넷 환경) 기준입니다.

1. 프로젝트 폴더로 이동
   ```bash
   cd /workspace/namgu-life-proposal
   ```
2. npm 기본 레지스트리 확인
   ```bash
   npm config get registry
   ```
   - 출력이 `https://registry.npmjs.org/`가 아니면 아래 실행
   ```bash
   npm config set registry https://registry.npmjs.org/
   ```
3. (회사/기관망이라면) 프록시 설정 확인
   ```bash
   npm config delete proxy
   npm config delete https-proxy
   ```
4. 의존성 설치
   ```bash
   npm install
   ```
5. 개발 서버 실행
   ```bash
   npm run dev
   ```
6. 브라우저에서 접속
   - `http://localhost:3000`
7. 빌드 테스트(배포 전 확인)
   ```bash
   npm run build
   npm run start
   ```


## 관리자 페이지 보호(MVP)
- `/admin` : 로그인 페이지
- `/admin/mock-data` : 로그인 성공 시에만 접근 가능
- 인증 방식: 환경변수 `ADMIN_PASSWORD` 기반 단순 비밀번호 + HttpOnly 쿠키
- 추후 확장 권장: Supabase Auth 또는 NextAuth

예시(.env.local):
```bash
ADMIN_PASSWORD=원하는_강력한_비밀번호
```

## 배포 전 체크리스트
- [ ] 실제 후보 사진/프로필 이미지로 교체
- [ ] 실데이터 기준 정책·활동 문구 검수
- [ ] 개인정보 처리방침/이용약관 링크 추가
- [ ] 폼 제출 백엔드(DB, 이메일/알림, 관리자 권한) 연동
- [ ] SEO 메타(도메인, OG 이미지, 구조화 데이터) 확정
- [ ] 접근성 점검(키보드 내비게이션/명도 대비)
