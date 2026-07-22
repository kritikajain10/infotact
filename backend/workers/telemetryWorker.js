const { parentPort } = require("worker_threads");
const { isInsideGeofence } = require(". ./utils/geofence");

parentPort.on("message", (data) => {
  const insideGeofence = isInsideGeofence(
    data.longitude,
    data.latitude
  );

  const processed = {
    ...data,
    insideGeofence,
    alert: insideGeofence ? "Vehicle inside geofence" : "Vehicle outside geofence",
    processedAt: new Date(),
  };

  parentPort.postMessage(processed);
});