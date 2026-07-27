type Props = {
    name: string;
    status: string;
  };
  
  function VehicleCard({ name, status }: Props) {
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
        <p>Status: {status}</p>
      </div>
    );
  }
  
  export default VehicleCard;