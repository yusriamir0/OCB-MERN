const express = require("express");
const app = express();

//! 1) How express works

app.get("/", (req, res) => {
    res.send("Hello world");
    console.log("Hello");
});

app.listen(8989);

// http://localhost:8989

// ! 2) Routing
