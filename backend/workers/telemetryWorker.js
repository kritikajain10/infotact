const { parentPort } = require("worker_threads");

parentPort.on("message", (data) => {
  const processed = {
    ...data,
    processedAt: new Date(),
  };

  parentPort.postMessage(processed);
});