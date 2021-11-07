const express = require("express");
const app = express();
const PORT = 3010;
const morgan = require("morgan");

app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/foo", (req, res) => {
  res.send("Ok!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
