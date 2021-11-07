const router = require("express").Router();
const omdb = require("omdb");

router.get("/", (req, res) => {
  // /movies/
  console.log("/movies is working");
});

router.get("/search/:movie", (req, res) => {
  // /movies/search/:movie
  console.log("/movies/search is working");
});

module.exports = router;
