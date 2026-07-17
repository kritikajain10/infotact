type Props = {
    title: string;
    value: string | number;
  };
  
  function StatusCard({ title, value }: Props) {
    return (
      <div
      style={{
        background: "#1e293b",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
        width: "180px",
        textAlign: "center",
        boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
        transition: "0.3s ease",
        cursor: "pointer",
      }}
      >
        <h3
  style={{
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
  }}
>
  {title}
</h3>

<h1
  style={{
    fontSize: "42px",
    fontWeight: "bold",
    margin: 0,
  }}
>
  {value}
</h1>
      </div>
    );
  }
  
  export default StatusCard;