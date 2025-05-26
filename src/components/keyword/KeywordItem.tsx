import { useState } from 'react';
import { Keyword } from '@/types';

interface KeywordItemProps {
  keyword: Keyword;
  onSave: (keywordId: number) => Promise<void>;
  isSaved: boolean;
}

export default function KeywordItem({ keyword, onSave, isSaved }: KeywordItemProps) {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(isSaved);

  const handleSave = async () => {
    if (saving) return;
    
    setSaving(true);
    try {
      await onSave(keyword.id);
      setSaved(true);
    } catch (error) {
      console.error('Error saving keyword:', error);
    } finally {
      setSaving(false);
    }
  };

  // Calculate background color based on relevance score
  const getRelevanceColor = (score: number) => {
    if (score >= 80) return 'bg-success';
    if (score >= 60) return 'bg-info';
    if (score >= 40) return 'bg-warning';
    return 'bg-danger';
  };

  return (
    <div className="card mb-3 shadow-sm hover-shadow">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">{keyword.keyword}</h5>
          <span className="badge bg-primary">{keyword.category}</span>
        </div>
        
        <div className="row mb-3">
          <div className="col-md-3">
            <div className="mb-2">
              <small className="text-muted">Popularity <span className="fw-bold">{keyword.popularity}%</span></small>
              <div className="progress">
                <div 
                  className="progress-bar bg-primary" 
                  role="progressbar" 
                  style={{ width: `${keyword.popularity}%` }}
                  aria-valuenow={keyword.popularity} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2">
              <small className="text-muted">Relevance <span className="fw-bold">{keyword.relevance}%</span></small>
              <div className="progress">
                <div 
                  className={`progress-bar ${getRelevanceColor(keyword.relevance)}`} 
                  role="progressbar" 
                  style={{ width: `${keyword.relevance}%` }}
                  aria-valuenow={keyword.relevance} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2">
              <small className="text-muted">Difficulty <span className="fw-bold">{keyword.difficulty}%</span></small>
              <div className="progress">
                <div 
                  className="progress-bar bg-danger" 
                  role="progressbar" 
                  style={{ width: `${keyword.difficulty}%` }}
                  aria-valuenow={keyword.difficulty} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-2">
              <small className="text-muted">% Views <span className="fw-bold">{keyword.views_percentage}%</span></small>
              <div className="progress">
                <div 
                  className="progress-bar bg-success" 
                  role="progressbar" 
                  style={{ width: `${keyword.views_percentage}%` }}
                  aria-valuenow={keyword.views_percentage} 
                  aria-valuemin={0} 
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="d-flex justify-content-end">
          <button 
            className={`btn ${saved ? 'btn-success' : 'btn-outline-primary'}`}
            onClick={handleSave}
            disabled={saving || saved}
          >
            {saving ? 'Saving...' : saved ? 'Saved ✓' : 'Save Keyword'}
          </button>
        </div>
      </div>
    </div>
  );
}