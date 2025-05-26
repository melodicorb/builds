import { Keyword, KeywordSuggestion } from '@/types';

// Sample data for generating related keywords
const commonKeywordPrefixes = ['top', 'best', 'professional', 'expert', 'certified', 'experienced'];
const commonKeywordSuffixes = ['specialist', 'professional', 'expert', 'manager', 'consultant', 'analyst'];

// Category-specific content keyword patterns
const contentKeywordPatterns = [
  'trends',
  'insights',
  'strategies',
  'tips',
  'advice',
  'best practices',
  'guide',
  'how to',
  'industry updates',
  'thought leadership'
];

export const generateRelatedKeywords = (keyword: string, category: string): KeywordSuggestion[] => {
  const relatedKeywords: KeywordSuggestion[] = [];
  
  // Generate variations with prefixes
  commonKeywordPrefixes.forEach(prefix => {
    if (!keyword.toLowerCase().includes(prefix.toLowerCase())) {
      relatedKeywords.push({
        keyword: `${prefix} ${keyword}`,
        relevance: Math.floor(Math.random() * 20) + 70 // Random relevance between 70-90%
      });
    }
  });
  
  // Generate variations with suffixes
  commonKeywordSuffixes.forEach(suffix => {
    if (!keyword.toLowerCase().includes(suffix.toLowerCase())) {
      relatedKeywords.push({
        keyword: `${keyword} ${suffix}`,
        relevance: Math.floor(Math.random() * 20) + 70
      });
    }
  });
  
  // Generate category-specific keywords
  if (category === 'profile') {
    relatedKeywords.push(
      { keyword: `${keyword} skills`, relevance: Math.floor(Math.random() * 10) + 85 },
      { keyword: `${keyword} background`, relevance: Math.floor(Math.random() * 15) + 75 },
      { keyword: `${keyword} experience`, relevance: Math.floor(Math.random() * 10) + 80 },
      { keyword: `${keyword} certification`, relevance: Math.floor(Math.random() * 15) + 75 }
    );
  } else if (category === 'job') {
    relatedKeywords.push(
      { keyword: `${keyword} position`, relevance: Math.floor(Math.random() * 10) + 85 },
      { keyword: `${keyword} opportunity`, relevance: Math.floor(Math.random() * 15) + 75 },
      { keyword: `${keyword} career`, relevance: Math.floor(Math.random() * 10) + 80 },
      { keyword: `${keyword} job`, relevance: Math.floor(Math.random() * 15) + 75 }
    );
  } else if (category === 'content') {
    relatedKeywords.push(
      { keyword: `${keyword} trends`, relevance: Math.floor(Math.random() * 10) + 85 },
      { keyword: `${keyword} insights`, relevance: Math.floor(Math.random() * 15) + 75 },
      { keyword: `${keyword} strategies`, relevance: Math.floor(Math.random() * 10) + 85 },
      { keyword: `${keyword} tips`, relevance: Math.floor(Math.random() * 10) + 85 },
      { keyword: `${keyword} best practices`, relevance: Math.floor(Math.random() * 15) + 80 }
    );
  }
  
  // Sort by relevance (highest first) and return limited number
  return relatedKeywords
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 10);
}

// Generate sample keywords for demo purposes
export const generateSampleKeywords = (searchKeyword: string, category: string): Keyword[] => {
  let baseKeywords: string[] = [];
  
  if (category === 'profile') {
    baseKeywords = [
      searchKeyword,
      `${searchKeyword} specialist`,
      `${searchKeyword} expert`,
      `${searchKeyword} professional`,
      `senior ${searchKeyword}`,
      `${searchKeyword} manager`,
      `${searchKeyword} consultant`,
      `${searchKeyword} analyst`,
      `${searchKeyword} lead`,
      `${searchKeyword} coordinator`
    ];
  } else if (category === 'job') {
    baseKeywords = [
      searchKeyword,
      `${searchKeyword} position`,
      `${searchKeyword} role`,
      `${searchKeyword} opportunity`,
      `remote ${searchKeyword}`,
      `senior ${searchKeyword} role`,
      `${searchKeyword} job`,
      `${searchKeyword} career`,
      `entry-level ${searchKeyword}`,
      `${searchKeyword} vacancy`
    ];
  } else if (category === 'content') {
    // Special handling for content keywords
    baseKeywords = contentKeywordPatterns.map(pattern => {
      return `${searchKeyword} ${pattern}`;
    });
    
    // Add a few more variations
    baseKeywords.push(
      `${searchKeyword} for beginners`,
      `${searchKeyword} for professionals`,
      `${searchKeyword} in 2023`,
      `why ${searchKeyword} matters`,
      `${searchKeyword} case study`
    );
  } else {
    // Fallback for any other category
    baseKeywords = [
      searchKeyword,
      `${searchKeyword} specialist`,
      `${searchKeyword} expert`,
      `${searchKeyword} professional`,
      `${searchKeyword} trends`,
      `${searchKeyword} insights`,
      `${searchKeyword} tips`,
      `${searchKeyword} guide`,
      `${searchKeyword} strategies`,
      `${searchKeyword} best practices`
    ];
  }
  
  return baseKeywords.map((keyword, index) => ({
    id: index + 1,
    keyword,
    category,
    popularity: Math.floor(Math.random() * 50) + 50, // Random popularity between 50-100%
    relevance: Math.floor(Math.random() * 40) + 60,  // Random relevance between 60-100%
    difficulty: Math.floor(Math.random() * 70) + 30, // Random difficulty between 30-100%
    views_percentage: Math.floor(Math.random() * 60) + 40, // Random views percentage between 40-100%
    created_at: new Date().toISOString()
  }));
}