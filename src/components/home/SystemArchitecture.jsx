import "../../css/SystemArchitecture.css";

function SystemArchitecture() {
  return (
    <section className="system-card">

      <div className="card-header">
        <h2>SYSTEM HIGH LEVEL ARCHITECTURE</h2>
        <div className="purple-line"></div>
      </div>

      <div className="architecture-flow">

        <div className="flow-box frontend">
          RentSafe-UI
        </div>

        <div className="flow-arrow">↓</div>

        <div className="flow-box gateway">
          API Gateway
        </div>

        <div className="flow-arrow">↓</div>

        <div className="services-grid">
          <div className="flow-box">Auth Service</div>
          <div className="flow-box active">
           Property Service
          </div>
          <div className="flow-box">Mailer Service</div>
          <div className="flow-box">
            Others Service
          </div>
        </div>

        <div className="flow-arrow">↓</div>

        <div className="infra-row">
          <div className="flow-box kafka">
            Kafka
          </div>

          <div className="flow-box redis">
            Redis
          </div>
        </div>

        <div className="flow-arrow">↓</div>

        <div className="infra-row">
          <div className="flow-box db">
            PostgreSQL
          </div>

          <div className="flow-box db">
            NO SQL
          </div>
        </div>

      </div>

    </section>
  );
}

export default SystemArchitecture;