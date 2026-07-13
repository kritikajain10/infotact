function Sidebar() {
    return (
      <div
        style={{
          width: "200px",
          height: "100vh",
          background: "#1f2937",
          color: "white",
          position: "fixed",
          left: 0,
          top: 0,
          padding: "20px",
        }}
      >
        <h2>FleetDash</h2>
        <hr />
        <p>🏠 Dashboard</p>
        <p>🚚 Vehicles</p>
        <p>⚠️ Alerts</p>
        <p>⚙️ Settings</p>
      </div>
    );
  }
  
  export default Sidebar;