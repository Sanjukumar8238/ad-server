const functions = require("firebase-functions");
const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "../public")));

// Define the main route to serve the HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Export the app as a Firebase Function
exports.app = functions.https.onRequest(app);
