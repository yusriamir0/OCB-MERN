// * Zahin class

// Model View Controller (MVC) and Database design - 4 sessions
//  ● Introduction to Node.js and MVC
//  ● Building Controllers and Routing
//  ● Views and Templates

// Database & SQL - 2 sessions
//  ● Understanding database
//  ● SQL query
//  ● Installing MySQL
//  ● Connectiong MySQL with Node JS

// Rest API - 4 sessions
//  ● Introduction and Setting Up REST API
//  ● Middleware, Validation, and Authentication
//  ● Handling Data and File Uploads
//  ● Handling deployment

// ! Day 1

const variable = require("nodejs-built-in modules");

// ! Day 2
// Basic node command
// > node -v
// > node
// > node index.js
// > npm init
// > npm install ‘package’
// > npm run ‘script’- npx ‘package’

//? In built module such as fs, path,...
// example fs = file system
var fs = require("fs"); // * For  CRUD
const kontenTulis = "Konten yang kita nak tulis";
fs.writeFile("example.txt", kontenTulis, (err) => {
    if (err) {
        console.error("Error yang muncul");
    } else {
        console.log("file sudah tulis");
    }
});
// contoh lain fs CRUD
fs.readFile("example.txt", (err) => {});

// OTHER in-built example path
const path = require("path");
const { log } = require("console");
const tempatFail = path.jon(__dirname, "fail", "contoh.txt");
console.log("nama fail", path.basename(tempatFail));

//! Day 3
