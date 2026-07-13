const mongoose = require("mongoose");

const TelemetrySchema = new mongoose.Schema({
  vehicleId: String,
  bucketHour: String,
  readings: [
    {
      latitude: Number,
      longitude: Number,
      speed: Number,
      timestamp: Date,
    },
  ],
});

module.exports = mongoose.model("Telemetry", TelemetrySchema);