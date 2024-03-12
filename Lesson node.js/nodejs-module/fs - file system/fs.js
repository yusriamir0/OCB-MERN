const { log } = require("console");
const fs = require("fs");
// Create file

fs.writeFile("index.html", "hello world", function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File created");
    }
});

fs.writeFile