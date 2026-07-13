type Props = {
    title: string;
    value: string | number;
  };
  
  function StatusCard({ title, value }: Props) {
    return (
      <div
        style={{
          background: "#1f2937",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "180px",
          textAlign: "center",
        }}
      >
        <h3>{title}</h3>
        <h1>{value}</h1>
      </div>
    );
  }
  
  export default StatusCard;