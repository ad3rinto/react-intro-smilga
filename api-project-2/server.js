const express = require("express");
const fs = require("fs")
const PORT = 8080;


const app = express()


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})




app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT} and working well`)
})