import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import KeywordList from '@/components/keyword/KeywordList';
import KeywordSearchForm from '@/components/keyword/KeywordSearchForm';
import RelatedKeywords from '@/components/keyword/RelatedKeywords';
import { Keyword } from '@/types';
import { generateSampleKeywords } from '@/utils/keywords';

export default function Search() {
  const router = useRouter();
  const { keyword, category } = router.query;
  
  const [keywords, setKeywords] = useState<Keyword[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchKeywords = async () => {
      if (!router.isReady) return;
      
      try {
        setLoading(true);
        
        // In a real application, we would fetch from the API
        // For this demo, we'll generate sample data
        let searchTerm = keyword as string;
        const categoryValue = category as string || 'profile';
        
        // Set default search terms based on category if none provided
        if (!searchTerm) {
          if (categoryValue === 'profile') {
            searchTerm = 'professional';
          } else if (categoryValue === 'job') {
            searchTerm = 'career';
          } else if (categoryValue === 'content') {
            searchTerm = 'linkedin';
          } else {
            searchTerm = 'linkedin';
          }
        }
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const generatedKeywords = generateSampleKeywords(searchTerm, categoryValue);
        setKeywords(generatedKeywords);
        setError(null);
      } catch (error) {
        console.error('Error fetching keywords:', error);
        setError('Failed to load keywords. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchKeywords();
  }, [router.isReady, keyword, category]);
  
  // Get display name for category
  const getCategoryDisplayName = (cat: string | string[] | undefined): string => {
    if (!cat) return 'Profile';
    
    const categoryMap: Record<string, string> = {
      'profile': 'Profile',
      'job': 'Job Search',
      'content': 'Content'
    };
    
    return categoryMap[cat as string] || 'Profile';
  };
  
  const searchTitle = keyword 
    ? `Results for "${keyword}"` 
    : category
    ? `Exploring ${getCategoryDisplayName(category)} Keywords`
    : 'Keyword Research';
  
  return (
    <Layout title={`${searchTitle} - LinkedIn Keywords Research Tool`}>
      <div className="mb-4">
        <KeywordSearchForm />
      </div>
      
      <div className="row">
        <div className="col-lg-8">
          <h1 className="h2 mb-4">{searchTitle}</h1>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Researching the best keywords...</p>
            </div>
          ) : error ? (
            <div className="alert alert-danger">{error}</div>
          ) : (
            <KeywordList keywords={keywords} />
          )}
        </div>
        
        <div className="col-lg-4">
          {keyword && category && !loading && !error && (
            <>
              <RelatedKeywords 
                keyword={keyword as string} 
                category={category as string} 
              />
              
              <div className="card shadow-sm mb-4">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Usage Tips</h5>
                </div>
                <div className="card-body">
                  <h6>How to use these {getCategoryDisplayName(category)} keywords:</h6>
                  {category === 'profile' && (
                    <ul className="mb-0">
                      <li>Include them in your headline and about section</li>
                      <li>Add them to your experience descriptions</li>
                      <li>Use them in your skills section</li>
                      <li>Incorporate them naturally in your profile summary</li>
                    </ul>
                  )}
                  {category === 'job' && (
                    <ul className="mb-0">
                      <li>Include them in your job search filters</li>
                      <li>Add them to your application materials</li>
                      <li>Use them when setting up job alerts</li>
                      <li>Incorporate them in your customized cover letters</li>
                    </ul>
                  )}
                  {category === 'content' && (
                    <ul className="mb-0">
                      <li>Include them in your post titles and headlines</li>
                      <li>Use them naturally throughout your content</li>
                      <li>Add them to hashtags in your posts</li>
                      <li>Incorporate them in your article summaries</li>
                      <li>Use them in comments on related posts</li>
                    </ul>
                  )}
                </div>
              </div>
            </>
          )}
          
          {(!keyword || !category) && !loading && !error && (
            <div className="card shadow-sm mb-4">
              <div className="card-header bg-light">
                <h5 className="mb-0">Keyword Research Tips</h5>
              </div>
              <div className="card-body">
                <p>To get the most out of your keyword research:</p>
                <ul className="mb-0">
                  <li>Be specific with your search terms</li>
                  <li>Choose the right category for your needs</li>
                  <li>Compare popularity vs. difficulty</li>
                  <li>Save keywords you want to use later</li>
                  <li>Explore related keywords for more ideas</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}