import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const visibility = body.publicConsent ? 'pending_public_review' : 'private_only';
  return NextResponse.json({ success: true, channel: 'support', visibility, receivedAt: new Date().toISOString(), body });
}
