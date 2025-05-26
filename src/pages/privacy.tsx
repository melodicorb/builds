import Layout from '@/components/layout/Layout';

export default function Privacy() {
  return (
    <Layout title="Privacy Policy - LinkedIn Keywords Research Tool">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="mb-4">Privacy Policy</h1>
              
              <p>
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="h5 mt-4">Information We Collect</h2>
              <p>
                We collect minimal information to provide our keyword research service. This includes:
              </p>
              <ul>
                <li>Keywords you search for</li>
                <li>Keywords you save</li>
                <li>Anonymous session data to manage your saved keywords</li>
              </ul>
              
              <h2 className="h5 mt-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide keyword research and suggestions</li>
                <li>Remember your saved keywords</li>
                <li>Improve our service based on usage patterns</li>
              </ul>
              
              <h2 className="h5 mt-4">Data Storage</h2>
              <p>
                Your saved keywords are stored in our secure database. We use a random session identifier
                stored in your browser's local storage to associate you with your saved keywords.
                This session ID is not tied to any personally identifiable information.
              </p>
              
              <h2 className="h5 mt-4">Third-Party Services</h2>
              <p>
                We do not share your information with third parties. Our tool is self-contained and
                does not integrate with external analytics or marketing services.
              </p>
              
              <h2 className="h5 mt-4">Your Rights</h2>
              <p>
                You can clear your saved keywords at any time by clearing your browser's local storage.
                This will remove the association between your browser and any saved keywords.
              </p>
              
              <h2 className="h5 mt-4">Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes
                by posting the new Privacy Policy on this page.
              </p>
              
              <h2 className="h5 mt-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@linkedinkeywords.example.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}