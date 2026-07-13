import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatusCard from "../components/StatusCard";

function Dashboard() {
    return (
        <div>
          <Sidebar />
      
          <div style={{ marginLeft: "220px", padding: "20px" }}>
            <Navbar />
      
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "20px",
                marginBottom: "30px",
              }}
            >
              <StatusCard title="Vehicles" value={120} />
              <StatusCard title="Active" value={108} />
              <StatusCard title="Alerts" value={5} />
              <StatusCard title="Offline" value={12} />
            </div>
      
            <h1>FleetDash Dashboard</h1>
            <p>Welcome to FleetDash 🚚</p>
          </div>
        </div>
      );
}

export default Dashboard;