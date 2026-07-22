const http = require("http");
const { Server } = require("socket.io");
const { Worker } = require("worker_threads");
const path = require("path");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { isInsideGeofence }= require("./utils/geofence");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("FleetDash API Running 🚚");
});
app.post("/telemetry", (req, res) => {
    const worker = new Worker(
      path.join(__dirname, "workers", "telemetryWorker.js")
    );
  
    worker.postMessage(req.body);
  
    worker.on("message", (result) => {
      io.emit("telemetry", result);
      res.json({
        success: true,
        data: result,
      });
    });
  
    worker.on("error", (err) => {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    });
  
    worker.on("exit", (code) => {
      if (code !== 0) {
        console.log(`Worker stopped with exit code ${code}`);
      }
    });
  });
const PORT = process.env.PORT || 5000;
connectDB();
console.log("Inside Geofence:", isInsideGeofence(77.25, 28.65));
console.log("Outside Geofence:", isInsideGeofence(78.00, 29.00));

io.on("connection", (socket) => {
  console.log("Client Connected");

  socket.emit("telemetry", {
    vehicles: 120,
    active: 108,
    alerts: 5,
    offline: 12,
  });

  socket.on("disconnect", () => {
    console.log("Client Disconnected");
  });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});