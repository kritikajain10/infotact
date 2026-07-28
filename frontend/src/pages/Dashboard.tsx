import VehicleCard from "../components/VehicleCard";
import CanvasMap from "../components/CanvasMap";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatusCard from "../components/StatusCard";
import useTelemetry from "../hooks/useTelemetry";

function Dashboard() {
  const telemetry = useTelemetry();
  const vehicles = [
    { id: 1 ,name: "Truck 101", status: "Offline"},
    { id: 2 ,name: "Truck 102", status: "Active"},
    { id: 3 ,name: "Truck 103", status: "Maintenance"},
    
    

  ];
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
            <div
       style={{
    marginTop: "20px",
    padding: "20px",
    background: "#1e293b",
    color: "white",
    borderRadius: "12px",
    width: "350px",
  }}
>
  <h3>Geofence Status</h3>
  <p>
    {telemetry.insideGeofence
      ? "🟢 Inside Geofence"
      : "🔴 Outside Geofence"}
  </p>

  <CanvasMap/>
  <h3>Alert</h3>
  <p>{telemetry.alert}</p>
</div>
          <div
  style={{
    marginTop: "20px",
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    color: "white",
    width: "350px",
  }}
>
  <h3>Vehicles</h3>

  {vehicles.map((vehicle)=> (
    <VehicleCard 
    key={vehicle.id}
    name={vehicle.name}
    status={vehicle.status}
    />

  ))}
</div>
          </div>
        </div>
      );
}

export default Dashboard;