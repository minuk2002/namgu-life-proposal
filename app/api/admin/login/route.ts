import { NextResponse } from 'next/server';
import { ADMIN_COOKIE_NAME, isValidAdminPassword } from '@/lib/adminAuth';

export async function POST(req: Request) {
  const body = await req.json();

  if (!isValidAdminPassword(body.password ?? '')) {
    return NextResponse.json({ success: false, message: 'invalid password' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: 'authenticated',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8
  });

  return response;
}
