export type ArchiveCategory =
  | '조례'
  | '구정질문'
  | '자유발언'
  | '토론회/간담회'
  | '현장활동'
  | '보도자료'
  | '사진기록';

export type ArchiveTag =
  | '1인가구'
  | '청년'
  | '어르신'
  | '복지'
  | '안전'
  | '골목길/보행'
  | '민원 해결'
  | '노동/인권';

export interface ArchiveItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: ArchiveCategory;
  tags: ArchiveTag[];
}

export interface DistrictPlan {
  district: '대명6동' | '대명9동' | '대명11동';
  issues: string[];
  promises: string[];
}

export interface Vision {
  title: string;
  description: string;
  promises: string[];
}

export interface NewsItem {
  id: string;
  type: '공지' | '보도자료' | '활동소식';
  title: string;
  summary: string;
  date: string;
}
