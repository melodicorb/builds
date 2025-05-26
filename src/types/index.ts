export interface Keyword {
  id: number;
  keyword: string;
  category: string;
  popularity: number;
  relevance: number;
  difficulty: number;
  views_percentage: number; // Percentage of profile views
  created_at: string;
}

export interface SavedKeyword {
  id: number;
  keyword_id: number;
  session_id: string;
  created_at: string;
  keyword?: Keyword;
}

export interface KeywordCategory {
  id: number;
  name: string;
  description: string;
}

export interface KeywordSuggestion {
  keyword: string;
  relevance: number;
}