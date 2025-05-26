import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import CategorySection from '@/components/home/CategorySection';
import StatisticsSection from '@/components/home/StatisticsSection';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="LinkedIn Keywords Research Tool - Find the Best Keywords">
      <HeroSection />
      <CategorySection />
      <StatisticsSection />
      
      <section className="py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="mb-4">Why LinkedIn Keywords Matter</h2>
                <p>
                  LinkedIn's algorithm heavily relies on keywords to determine which profiles to show in search results.
                  Using the right keywords in your profile, job applications, and content can significantly impact your visibility
                  and success on the platform.
                </p>
                
                <h3 className="h5 mt-4">For Your Profile</h3>
                <p>
                  Recruiters and hiring managers use specific keywords to find candidates. Including relevant industry terms,
                  skills, and job titles in your profile helps you appear in more search results and increases your chances
                  of being discovered by the right people.
                </p>
                
                <h3 className="h5 mt-4">For Job Searches</h3>
                <p>
                  Using the right keywords in your job search helps you find more relevant opportunities. Additionally,
                  incorporating these terms in your applications helps you pass through Applicant Tracking Systems (ATS)
                  that filter candidates based on keyword matches.
                </p>
                
                <h3 className="h5 mt-4">For Content</h3>
                <p>
                  Posts and articles that include trending industry keywords tend to perform better on LinkedIn. Our tool
                  helps you identify which terms to include in your content to maximize reach and engagement.
                </p>
                
                <div className="mt-4 text-center">
                  <h4>Our Partners</h4>
                  <div className="d-flex justify-content-center gap-4 mt-3">
                    <a 
                      href="https://www.facebook.com/megahub11" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-facebook me-2"></i>MegaHub
                    </a>
                    <a 
                      href="https://clicksoftly.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-outline-primary"
                    >
                      <i className="bi bi-globe me-2"></i>ClickSoftly
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}