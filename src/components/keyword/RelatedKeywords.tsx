import { useState, useEffect } from 'react';
import { KeywordSuggestion } from '@/types';
import { useRouter } from 'next/router';

interface RelatedKeywordsProps {
  keyword: string;
  category: string;
}

export default function RelatedKeywords({ keyword, category }: RelatedKeywordsProps) {
  const [relatedKeywords, setRelatedKeywords] = useState<KeywordSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    const fetchRelatedKeywords = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/keywords/related?keyword=${encodeURIComponent(keyword)}&category=${encodeURIComponent(category)}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch related keywords');
        }
        
        const data = await response.json();
        setRelatedKeywords(data);
        setError(null);
      } catch (error) {
        console.error('Error fetching related keywords:', error);
        setError('Failed to load related keywords. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    if (keyword) {
      fetchRelatedKeywords();
    }
  }, [keyword, category]);
  
  const handleKeywordClick = (newKeyword: string) => {
    router.push(`/search?keyword=${encodeURIComponent(newKeyword)}&category=${encodeURIComponent(category)}`);
  };
  
  if (loading) {
    return (
      <div className="card">
        <div className="card-body text-center">
          <p>Loading related keywords...</p>
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="card border-danger">
        <div className="card-body">
          <p className="text-danger">{error}</p>
        </div>
      </div>
    );
  }
  
  if (relatedKeywords.length === 0) {
    return null;
  }
  
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header bg-light">
        <h5 className="mb-0">Related Keywords</h5>
      </div>
      <div className="card-body">
        <div className="d-flex flex-wrap gap-2">
          {relatedKeywords.map((suggestion, index) => (
            <span 
              key={index} 
              className="badge bg-light text-dark border p-2 cursor-pointer"
              style={{ fontSize: '0.9rem', cursor: 'pointer' }}
              onClick={() => handleKeywordClick(suggestion.keyword)}
              title="Click to search for this keyword"
            >
              {suggestion.keyword}
              <span className="ms-1 text-muted small">({suggestion.relevance}%)</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}