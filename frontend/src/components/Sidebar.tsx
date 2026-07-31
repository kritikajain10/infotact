import { Link } from "react-router-dom";

export default function Sidebar() {
  const isMobile = window.innerWidth < 768;

  return (
    <div
      style={{
        width: isMobile ? "75px" : "230px",
        height: "100vh",
        background: "linear-gradient(180deg, #3b82f6, #60a5fa)",
        color: "white",
        position: "fixed",
        top: 0,
        left: 0,
        padding: "20px",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
        boxShadow: "4px 0 15px rgba(0,0,0,0.25)",
      }}
    >
      <div>
        <h2
          style={{
            marginBottom: "40px",
            textAlign: "center",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          🚚 {!isMobile && "FleetDash"}
        </h2>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <Link
            to="/dashboard"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              padding: "10px",
              borderRadius: "10px",
              background: "rgba(255,255,255,0.15)",
            }}
          >
            🏠 {!isMobile && "Dashboard"}
          </Link>

          <Link
            to="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            🚗 {!isMobile && "Vehicles"}
          </Link>

          <Link
            to="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            ⚠️ {!isMobile && "Alerts"}
          </Link>

          <Link
            to="#"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            ⚙️ {!isMobile && "Settings"}
          </Link>
        </nav>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.href = "/";
        }}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        🚪 {!isMobile && "Logout"}
      </button>
    </div>
  );
}