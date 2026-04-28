import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ADMIN_COOKIE_NAME } from '@/lib/adminAuth';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /admin 은 로그인 페이지로 허용, 하위 경로는 인증 필요
  if (pathname.startsWith('/admin') && pathname !== '/admin') {
    const session = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (session !== 'authenticated') {
      const loginUrl = new URL('/admin', request.url);
      loginUrl.searchParams.set('next', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*']
};
