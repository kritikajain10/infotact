import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatusCard from "../components/StatusCard";
import useTelemetry from "../hooks/useTelemetry";

function Dashboard() {
  const telemetry = useTelemetry();
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
              <StatusCard title="Vehicles" value={telemetry.vehicles} />
              <StatusCard title="Active" value={telemetry.active} />
             <StatusCard title="Alerts" value={telemetry.alerts} />
              <StatusCard title="Offline" value={telemetry.offline} />
            </div>
      
            <h1>FleetDash Dashboard</h1>
            <p>Welcome to FleetDash 🚚</p>
          </div>
        </div>
      );
}

export default Dashboard;