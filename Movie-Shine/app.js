const express = require("express");
const app = express();
const PORT = 3000;

const morgan = require("morgan");
app.use(morgan("dev"));

const movieRoutes = require("./routes/movies");

//*** Middleware
app.use(express.json);
app.use(express.static("public"));
app.use("/movies", movieRoutes);
//*** End middleware

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
