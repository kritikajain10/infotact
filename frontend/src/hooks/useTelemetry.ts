import { useEffect, useState } from "react";
import socket from "../services/socket";

export default function useTelemetry() {
  const [telemetry, setTelemetry] = useState({
    vehicles: 0,
    active: 0,
    alerts: 0,
    offline: 0,
  });

  useEffect(() => {
    socket.on("telemetry", (data) => {
      console.log("Telemetry:", data);
      setTelemetry(data);
    });

    return () => {
      socket.off("telemetry");
    };
  }, []);

  return telemetry;
}