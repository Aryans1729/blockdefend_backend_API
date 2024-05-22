const app = require('./app');

console.log("App imported successfully");

const start = async () => {
  try {
    console.log("Starting server...");
    app.listen(3000, () => {
      console.log("Node Server Listening on 3000.");
    });
  } catch (err) {
    console.error("Failed to connect to server", err);
    throw new Error("Failed to connect to server");
  }
};
start();
