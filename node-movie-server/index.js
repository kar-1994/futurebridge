const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors({origin:true}))
app.use(express.json());
const router = require("./route")
app.use("/api", router)
app.listen(3000, () => {
    console.log("Server is running.")
})

module.exports = app;