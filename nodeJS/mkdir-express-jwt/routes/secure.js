// Detta ska hantera vår anrop till API:et för att logga in användaren
const express = require("express");
const router = express.Router(); // Här använder vi routern som är inbyggd i express.
const jwt = require("jsonwebtoken");
const secret = "abcd4321";

router.post("/login", (req, res) => {
  const creds = {
    username: "max",
    password: "1234",
  };
  // Kolla om request är likadant som det från databasem (creds) credentioals
  if (
    req.body.username == creds.username &&
    req.body.password === creds.password
  ) {
    res.status(200).json({
      status: "success",
      token: jwt.sign({ name: "Max", favColor: "Green" }, secret),
      redirect: "admin",
    });
  } else {
    res.status(401).json({ status: "not authorized" });
  }
});

module.exports = router;
