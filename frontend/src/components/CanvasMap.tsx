import useTelemetry from "../hooks/useTelemetry";
import { useEffect, useRef } from "react";

export default function CanvasMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const telemetry = useTelemetry();

  
  useEffect(() => {
    let x = 100;
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
      ctx.fillStyle = "#22c55e";
      ctx.beginPath();
      ctx.arc(x, 150, 10, 0, Math.PI * 2);
      ctx.fill();
    
     x = telemetry.insideGeofence ?
     250 : 100;
    
      requestAnimationFrame(draw);
    }
    
    draw();
  },[]);
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