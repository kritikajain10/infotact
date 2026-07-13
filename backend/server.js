const { Worker } = require("worker_threads");
const path = require("path");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});