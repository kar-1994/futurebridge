const express = require("express");
const { reqValidator } = require("./reqValidator");
const movies = require('./sample-data/movies.json');
const router = express.Router()
router.get("/healthCheck", (req, res) => {

    res.send("Node app is running.")
})

router.get("/movies", (req, res) => {
    res.send(movies);
})
module.exports = router