import useTelemetry from "../hooks/useTelemetry";
import { useEffect, useRef } from "react";

export default function CanvasMap() {
  const vehicles = Array.from({ length: 300 }, () => ({
    x: Math.random() * 700,
    y: Math.random() * 300,
    dx: Math.random() * 2 + 1,
    color: Math.random() > 0.5 ? "#22c55e" : "#3b82f6"
  }));
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const telemetry = useTelemetry();

  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

   
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      // Background
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    
      // Title
      ctx.fillStyle = "white";
      ctx.font = "20px Arial";
      ctx.fillText("FleetDash Canvas", 20, 35);
      ctx.font = "16px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(telemetry.alert,20, 60);
    
      // Vehicle
      vehicles.forEach(vehicle => {

        if (telemetry.insideGeofence) {
          vehicle.x += vehicle.dx;
      
          if (vehicle.x > canvas.width) {
            vehicle.x = 0;
          }
      
        } else {
          vehicle.x -= vehicle.dx;
      
          if (vehicle.x < 0) {
            vehicle.x = canvas.width;
          }
        }
      
        ctx.beginPath();
        ctx.fillStyle = vehicle.color;
        ctx.arc(vehicle.x, vehicle.y, 5, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    }
    
    draw();
  }, [telemetry]);
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