const express = require("express");
const router = express.Router(); // Här använder vi routern som är inbyggd i express.
const path = require("path"); // inbyggd core module som gör det enklare att servera sidor till frontend.

router.get("/admin", (req, res) => {
  res.sendFile(path.resolve("public/admin.html"));
  return;
});

module.exports = router;
