import KeywordSearchForm from '../keyword/KeywordSearchForm';

export default function HeroSection() {
  return (
    <section className="py-5 hero-section">
      <div className="decorative-dots" style={{ top: '30px', right: '10%' }}></div>
      <div className="decorative-dots" style={{ bottom: '20px', left: '5%' }}></div>
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h1 className="display-4 fw-bold mb-3">Boost Your LinkedIn Presence with the Right Keywords</h1>
          <p className="lead text-muted mb-4">
            Our LinkedIn Keyword Research Tool helps you find the most effective keywords to optimize your profile, 
            improve job search results, and create engaging content.
          </p>
          <div className="d-flex gap-2 mb-4">
            <div className="d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg text-primary" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </div>
              <span>Improve profile visibility</span>
            </div>
            <div className="d-flex align-items-center">
              <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg text-primary" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </div>
              <span>Get more job opportunities</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <KeywordSearchForm />
        </div>
      </div>
    </section>
  );
}