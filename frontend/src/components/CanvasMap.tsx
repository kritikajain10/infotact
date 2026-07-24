import { useEffect, useRef } from "react";

export default function CanvasMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Background
    ctx.fillStyle = "#1e293b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Title
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("FleetDash Canvas", 20, 35);

    // Demo vehicle
    ctx.fillStyle = "#22c55e";
    ctx.beginPath();
    ctx.arc(100, 150, 10, 0, Math.PI * 2);
    ctx.fill();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={700}
      height={300}
      style={{
        border: "2px solid #ccc",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    />
  );
}