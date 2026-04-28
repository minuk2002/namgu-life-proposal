interface PrivacyConsentProps {
  requiredName?: string;
}

export function PrivacyConsent({ requiredName = 'privacyConsent' }: PrivacyConsentProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
      <h3 className="font-semibold text-slate-900">개인정보 수집·이용 동의</h3>
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li>수집 항목: 이름(또는 닉네임), 연락처(선택 입력 가능), 거주 정보, 의견/메시지 내용</li>
        <li>이용 목적: 주민 의견 접수 확인, 답변 요청 시 회신, 정책·참여 운영 관리</li>
        <li>보관 기간: 접수일로부터 최대 3년 보관 후 파기 (법령상 의무 보관 시 예외)</li>
        <li>문의처: 남구생활제안소 운영팀 (추후 연락처/이메일 고정 표기)</li>
        <li>비공개 처리 안내: 주민 의견과 비공개 응원 메시지는 외부에 공개되지 않으며 운영자만 확인</li>
      </ul>
      <label className="mt-3 block font-medium">
        <input type="checkbox" name={requiredName} required className="mr-2" />개인정보 수집·이용에 동의합니다.
      </label>
    </div>
  );
}
