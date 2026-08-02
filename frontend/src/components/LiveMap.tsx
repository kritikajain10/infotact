import { useEffect, useState, useRef} from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const activeIcon = new L.DivIcon({
    html: "🟢",
    className: "",
    iconSize: [20,20],
  });
  
  const offlineIcon = new L.DivIcon({
    html: "🔴",
    className: "",
    iconSize: [20,20],
  });
export default function LiveMap() {
    const [vehicles, setVehicles] = useState<any[]>(() =>
        Array.from({ length: 120 }, (_, i) => ({
          id: i + 1,
          lat: 28.6139 + Math.random() * 0.04,
          lng: 77.209 + Math.random() * 0.04,
          speed: Math.floor(Math.random() * 80) + 20,
          status: Math.random() > 0.2 ? "active" : "offline",
dx: (Math.random() - 0.5) * 0.00001,
dy: (Math.random() - 0.5) * 0.00001,
        }))
      );
      const markerRefs = useRef<Record<number, L.Marker>>({});
      
      
        useEffect(() => {
            const interval = setInterval(() => {
                setVehicles((prev) =>
                    prev.map((v) => {
                      if (v.status === "offline") {
                        return v; // Don't move offline vehicles
                      }
                  
                      return {
                        ...v,
                        lat: v.lat + v.dx,
                        lng: v.lng + v.dy,
                      };
                    })
                  );
            }, 30);
          
            return () => clearInterval(interval);
          }, []);
  return (
    <MapContainer
      center={[28.6139, 77.209]}
      zoom={13}
      style={{
        height: "500px",
        width: "100%",
        borderRadius: "16px",
      }}
    >
      <TileLayer
        attribution="©️ OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {vehicles.map((v) => (
        <Marker
        key={v.id}
        position={[v.lat, v.lng]}
        icon={v.status === "active" ? activeIcon : offlineIcon}
      
      >
    
          <Popup>
            <b>Vehicle {v.id}</b>
            <br />
            Speed: {v.speed} km/h
            <br />
            Status: {v.status}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
} 
