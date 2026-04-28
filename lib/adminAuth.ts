export const ADMIN_COOKIE_NAME = 'nglp_admin_session';

/**
 * MVP용 간단한 관리자 비밀번호.
 * 운영 시 반드시 환경변수(ADMIN_PASSWORD)로 교체하고,
 * 향후 Supabase Auth/NextAuth 같은 인증 체계로 확장하세요.
 */
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'change-me-admin-password';

export function isValidAdminPassword(input: string) {
  return input === ADMIN_PASSWORD;
}
