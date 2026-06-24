 import "../App.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Contractor Dashboard</h1>

      <div className="card-container">

        <div className="card">
          <h2>Total Workers</h2>
          <p>25</p>
        </div>

        <div className="card">
          <h2>Present Today</h2>
          <p>20</p>
        </div>

        <div className="card">
          <h2>Total Wage Due</h2>
          <p>₹15,000</p>
        </div>

        <div className="card">
          <h2>Total Paid</h2>
          <p>₹10,000</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;