import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function About() {
  return (
    <Layout title="About - LinkedIn Keywords Research Tool">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="mb-4">About Our LinkedIn Keywords Research Tool</h1>
              
              <p className="lead">
                Our tool is designed to help professionals optimize their LinkedIn presence by finding 
                the most effective keywords for their profiles, job searches, and content.
              </p>
              
              <h2 className="h4 mt-4">Our Mission</h2>
              <p>
                We believe that everyone deserves to have their skills and expertise recognized on LinkedIn.
                Our mission is to help professionals increase their visibility, attract better opportunities,
                and build stronger networks by using data-driven keyword optimization strategies.
              </p>
              
              <h2 className="h4 mt-4">How It Works</h2>
              <p>
                Our tool analyzes LinkedIn's search algorithm patterns and industry trends to identify
                the most effective keywords for your specific needs. We evaluate keywords based on four key metrics:
              </p>
              
              <ul>
                <li><strong>Popularity:</strong> How frequently the keyword is searched on LinkedIn</li>
                <li><strong>Relevance:</strong> How closely the keyword matches your search intent and category</li>
                <li><strong>Difficulty:</strong> How competitive the keyword is (higher difficulty means more profiles use this keyword)</li>
                <li><strong>% Views:</strong> The estimated percentage increase in profile views when using this keyword</li>
              </ul>
              
              <h2 className="h4 mt-4">How to Use Our Tool</h2>
              <ol>
                <li>Enter a keyword related to your industry, skills, or job title</li>
                <li>Select the appropriate category (Profile, Job Search, or Content)</li>
                <li>Review the results and related keyword suggestions</li>
                <li>Save your favorite keywords for future reference</li>
                <li>Implement these keywords strategically in your LinkedIn profile, applications, or content</li>
              </ol>
              
              <div className="mt-5">
                <h2 className="h4">Connect With Us</h2>
                <div className="d-flex gap-3 mt-3">
                  <a 
                    href="https://www.facebook.com/megahub11" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                  >
                    <i className="bi bi-facebook me-2"></i>Follow us on Facebook
                  </a>
                  <a 
                    href="https://clicksoftly.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-globe me-2"></i>Visit our Website
                  </a>
                </div>
              </div>
              
              <div className="text-center mt-5">
                <Link href="/" className="btn btn-primary btn-lg">
                  Start Researching Keywords
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}