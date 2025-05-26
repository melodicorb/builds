import Layout from '@/components/layout/Layout';
import SavedKeywordList from '@/components/keyword/SavedKeywordList';

export default function SavedKeywords() {
  return (
    <Layout title="Saved Keywords - LinkedIn Keywords Research Tool">
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <SavedKeywordList />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}