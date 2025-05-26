export default function StatisticsSection() {
  return (
    <section className="py-5 stats-section">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="stats-card">
              <h2 className="display-4 fw-bold text-primary mb-2">5,000+</h2>
              <p className="text-muted">LinkedIn keywords in our database</p>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="stats-card">
              <h2 className="display-4 fw-bold text-primary mb-2">87%</h2>
              <p className="text-muted">Increase in profile views with optimized keywords</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="stats-card">
              <h2 className="display-4 fw-bold text-primary mb-2">3x</h2>
              <p className="text-muted">More likely to be found by recruiters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}