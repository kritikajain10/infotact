type Props = {
    name: string;
    status: string;
  };
  
  function VehicleCard({ name, status }: Props) {
    const statusColor = status === "Active"
      ? "#22c55e"
      : status === "Offline" ? "#ef4444" : "f59eob";
      
    return (
      
      <div
        style={{
          background: "#1e293b",
          color: "white",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
      >
        <h3>{name}</h3>
        <p>
          status: {" "}
          <span 
          style={{
            color: statusColor,
            fontWeight: "bold",
          }}>{status}</span>

        </p>
      </div>
    );
  }
  
  export default VehicleCard;