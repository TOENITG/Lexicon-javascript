const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

// Public routes
const pages = require("./routes/pages");

// Secure route
const secureRoute = require("./routes/secure");

app.use(express.json());
app.use(express.static("public"));
// Alla siror på servern
app.use("/", pages);
// Secure routes
app.use("/secure", secureRoute);

app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
