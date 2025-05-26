import Layout from '@/components/layout/Layout';

export default function Terms() {
  return (
    <Layout title="Terms of Service - LinkedIn Keywords Research Tool">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h1 className="mb-4">Terms of Service</h1>
              
              <p>
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="h5 mt-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using our LinkedIn Keywords Research Tool, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, please do not use our service.
              </p>
              
              <h2 className="h5 mt-4">2. Description of Service</h2>
              <p>
                Our service provides keyword research and suggestions for LinkedIn profiles, job searches, and content.
                The service is provided "as is" and we make no guarantees about the accuracy or effectiveness of the keywords provided.
              </p>
              
              <h2 className="h5 mt-4">3. Use of the Service</h2>
              <p>
                You agree to use our service only for lawful purposes and in accordance with these Terms. You are responsible
                for ensuring that your use of the keywords complies with LinkedIn's terms of service.
              </p>
              
              <h2 className="h5 mt-4">4. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our service are owned by us and are protected by copyright,
                trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create
                derivative works of our service without our express permission.
              </p>
              
              <h2 className="h5 mt-4">5. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of or inability to use our service.
              </p>
              
              <h2 className="h5 mt-4">6. Disclaimer of Warranties</h2>
              <p>
                Our service is provided on an "as is" and "as available" basis, without any warranties of any kind.
                We do not guarantee that the keywords provided will improve your LinkedIn profile visibility or job prospects.
              </p>
              
              <h2 className="h5 mt-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of any material changes
                by posting the new Terms on our website. Your continued use of our service after such modifications
                will constitute your acknowledgment and agreement to the modified Terms.
              </p>
              
              <h2 className="h5 mt-4">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
                our company is registered, without regard to its conflict of law provisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}