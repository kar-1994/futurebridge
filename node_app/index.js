const express = require("express")
const app = express()
app.use(express.json());
const router = require("./route")
app.use("/api", router)
app.listen(3000, () => {
    console.log("Server is running.")
})

module.exports = app;