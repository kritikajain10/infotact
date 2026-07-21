const turf = require("@turf/turf");

const geofence = turf.polygon([[
  [77.20, 28.60],
  [77.30, 28.60],
  [77.30, 28.70],
  [77.20, 28.70],
  [77.20, 28.60]
]]);

function isInsideGeofence(longitude, latitude) {
  const point = turf.point([longitude, latitude]);
  return turf.booleanPointInPolygon(point, geofence);
}

module.exports = { isInsideGeofence };