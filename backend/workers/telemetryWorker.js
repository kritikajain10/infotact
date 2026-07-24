const { parentPort } = require("worker_threads");
const { isInsideGeofence } = require(". ./utils/geofence");

parentPort.on("message", (data) => {
  const insideGeofence = isInsideGeofence(
    data.longitude,
    data.latitude
  );
  let geofenceEvent = "No Change";
  if(insideGeofence) {
    geofenceEvent = "Vehicle Entered Geofence";
  }
  else {
    geofenceEvent = "Vehicle Exited Geofence";
  }
  

  const processed = {
    ...data,
    insideGeofence,
    geofenceEvent,
    alert: insideGeofence ? "Vehicle inside geofence" : "Vehicle outside geofence",
    processedAt: new Date(),
  };

  parentPort.postMessage(processed);
});