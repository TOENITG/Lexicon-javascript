const express = require("express");
const app = express();
const PORT = 3000;
const quotes = require("inspirational-quotes");
const morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.static("public"));

app.get("/quote", (req, res) => {
  const quote = quotes.getRandomQuote();
  res.json({ quote: quote, success: true });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
