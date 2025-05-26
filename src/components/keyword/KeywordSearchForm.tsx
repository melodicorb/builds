import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function KeywordSearchForm() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('profile');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  
  // Set initial values based on URL parameters
  useEffect(() => {
    if (router.isReady) {
      if (router.query.keyword) {
        setKeyword(router.query.keyword as string);
      }
      
      if (router.query.category) {
        setCategory(router.query.category as string);
      }
    }
  }, [router.isReady, router.query.keyword, router.query.category]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!keyword.trim() && !category) return;
    
    setIsSubmitting(true);
    try {
      // If keyword is empty but category is selected, we'll still search with just the category
      if (!keyword.trim()) {
        router.push(`/search?category=${encodeURIComponent(category)}`);
      } else {
        router.push(`/search?keyword=${encodeURIComponent(keyword)}&category=${encodeURIComponent(category)}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="card bg-light shadow-sm">
        <div className="card-body p-4">
          <h3 className="card-title mb-4">Find the perfect LinkedIn keywords</h3>
          
          <div className="mb-3">
            <label htmlFor="keyword" className="form-label">Enter a keyword or phrase</label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="keyword"
              placeholder="e.g., project manager, digital marketing, web developer"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              disabled={isSubmitting}
            />
            <small className="text-muted">Leave empty to explore by category</small>
          </div>
          
          <div className="mb-4">
            <label className="form-label">Category</label>
            <div className="d-flex flex-wrap">
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  id="profile"
                  value="profile"
                  checked={category === 'profile'}
                  onChange={() => setCategory('profile')}
                />
                <label className="form-check-label" htmlFor="profile">
                  Profile Keywords
                </label>
              </div>
              <div className="form-check me-4">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  id="job"
                  value="job"
                  checked={category === 'job'}
                  onChange={() => setCategory('job')}
                />
                <label className="form-check-label" htmlFor="job">
                  Job Search Keywords
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="category"
                  id="content"
                  value="content"
                  checked={category === 'content'}
                  onChange={() => setCategory('content')}
                />
                <label className="form-check-label" htmlFor="content">
                  Content Keywords
                </label>
              </div>
            </div>
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary btn-lg w-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Searching...' : 'Research Keywords'}
          </button>
        </div>
      </div>
    </form>
  );
}