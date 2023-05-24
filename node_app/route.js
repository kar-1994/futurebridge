const express = require("express");
const { reqValidator } = require("./reqValidator");
const router = express.Router()
router.get("/healthCheck", (req, res) => {

    res.send("Node app is running.")
})

router.post("/register/user", reqValidator, (req, res) => {
    res.send("Data submitted successfully.")
})
module.exports = router