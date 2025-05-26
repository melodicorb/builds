import { useState, useEffect } from 'react';
import { SavedKeyword } from '@/types';
import { generateSessionId } from '@/utils/session';

export default function SavedKeywordList() {
  const [savedKeywords, setSavedKeywords] = useState<SavedKeyword[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchSavedKeywords = async () => {
    try {
      setLoading(true);
      const sessionId = generateSessionId();
      const response = await fetch(`/api/saved-keywords?sessionId=${sessionId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch saved keywords');
      }
      
      const data = await response.json();
      setSavedKeywords(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching saved keywords:', error);
      setError('Failed to load saved keywords. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchSavedKeywords();
  }, []);
  
  const removeSavedKeyword = async (id: number) => {
    try {
      const response = await fetch(`/api/saved-keywords/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to remove saved keyword');
      }
      
      setSavedKeywords(savedKeywords.filter(kw => kw.id !== id));
    } catch (error) {
      console.error('Error removing saved keyword:', error);
      alert('Failed to remove saved keyword. Please try again.');
    }
  };
  
  if (loading) {
    return <div className="text-center py-4">Loading saved keywords...</div>;
  }
  
  if (error) {
    return (
      <div className="alert alert-danger">
        {error}
        <button 
          className="btn btn-outline-danger ms-2"
          onClick={fetchSavedKeywords}
        >
          Retry
        </button>
      </div>
    );
  }
  
  return (
    <div>
      <h2 className="mb-4">Your Saved Keywords</h2>
      
      {savedKeywords.length === 0 ? (
        <div className="alert alert-info">
          You haven't saved any keywords yet.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="table-light">
              <tr>
                <th>Keyword</th>
                <th>Category</th>
                <th>Popularity</th>
                <th>Relevance</th>
                <th>Difficulty</th>
                <th>% Views</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {savedKeywords.map((item) => (
                <tr key={item.id}>
                  <td>{item.keyword?.keyword}</td>
                  <td>
                    <span className="badge bg-primary">{item.keyword?.category}</span>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="me-2 fw-bold">{item.keyword?.popularity}%</span>
                      <div className="progress flex-grow-1" style={{ height: '10px' }}>
                        <div 
                          className="progress-bar bg-primary" 
                          role="progressbar" 
                          style={{ width: `${item.keyword?.popularity}%` }}
                          aria-valuenow={item.keyword?.popularity} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="me-2 fw-bold">{item.keyword?.relevance}%</span>
                      <div className="progress flex-grow-1" style={{ height: '10px' }}>
                        <div 
                          className="progress-bar bg-success" 
                          role="progressbar" 
                          style={{ width: `${item.keyword?.relevance}%` }}
                          aria-valuenow={item.keyword?.relevance} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="me-2 fw-bold">{item.keyword?.difficulty}%</span>
                      <div className="progress flex-grow-1" style={{ height: '10px' }}>
                        <div 
                          className="progress-bar bg-danger" 
                          role="progressbar" 
                          style={{ width: `${item.keyword?.difficulty}%` }}
                          aria-valuenow={item.keyword?.difficulty} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="me-2 fw-bold">{item.keyword?.views_percentage}%</span>
                      <div className="progress flex-grow-1" style={{ height: '10px' }}>
                        <div 
                          className="progress-bar bg-info" 
                          role="progressbar" 
                          style={{ width: `${item.keyword?.views_percentage}%` }}
                          aria-valuenow={item.keyword?.views_percentage} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeSavedKeyword(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}