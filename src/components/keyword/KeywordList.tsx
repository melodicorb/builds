import { useState, useEffect } from 'react';
import { Keyword } from '@/types';
import KeywordItem from './KeywordItem';
import { generateSessionId } from '@/utils/session';

interface KeywordListProps {
  keywords: Keyword[];
}

export default function KeywordList({ keywords }: KeywordListProps) {
  const [savedKeywordIds, setSavedKeywordIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchSavedKeywords = async () => {
      try {
        const sessionId = generateSessionId();
        const response = await fetch(`/api/saved-keywords?sessionId=${sessionId}`);
        
        if (response.ok) {
          const data = await response.json();
          setSavedKeywordIds(data.map((item: any) => item.keyword_id));
        }
      } catch (error) {
        console.error('Error fetching saved keywords:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSavedKeywords();
  }, []);
  
  const saveKeyword = async (keywordId: number) => {
    try {
      const sessionId = generateSessionId();
      const response = await fetch('/api/saved-keywords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ keywordId, sessionId }),
      });
      
      if (response.ok) {
        setSavedKeywordIds([...savedKeywordIds, keywordId]);
      }
    } catch (error) {
      console.error('Error saving keyword:', error);
      throw error;
    }
  };
  
  if (loading) {
    return <div className="text-center py-4">Loading...</div>;
  }
  
  return (
    <div>
      {keywords.length === 0 ? (
        <div className="alert alert-info">No keywords found. Try a different search term.</div>
      ) : (
        <>
          <p className="mb-3">Found {keywords.length} keywords</p>
          {keywords.map((keyword) => (
            <KeywordItem
              key={keyword.id}
              keyword={keyword}
              onSave={saveKeyword}
              isSaved={savedKeywordIds.includes(keyword.id)}
            />
          ))}
        </>
      )}
    </div>
  );
}