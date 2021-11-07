const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

https: app.get("/", (req, res) => {
  const html = `<h1>Hejsan</h1><p>coolt, va??</p>`;
  res.send(html);
});

app.get("/exempel", (req, res) => {
  const attSkicka = {
    msg: "Okidoki",
    status: 400,
  };
  res.json(attSkicka);
});

app.get("/djur/:animals", (req, res) => {
  const x = `Ditt favoritdjur är: ${req.params.animals}`;
  res.send(x);
});

app.post("/email", (req, res) => {
  const emailAddress = req.body.email;
  res.status(200).json({
    msg: "email sparat",
    emailAddress,
  });
});

app.listen(PORT, () => {
  console.log(`Server runnint on port ${PORT}`);
});
