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

// const variable = require("nodejs-built-in modules");

// ! Day 2
// // Basic node command
// // > node -v
// // > node
// // > node index.js
// // > npm init
// // > npm install ‘package’
// // > npm run ‘script’- npx ‘package’

// //? In built module such as fs, path,...
// // example fs = file system
// var fs = require("fs"); // * For  CRUD
// const kontenTulis = "Konten yang kita nak tulis";
// fs.writeFile("example.txt", kontenTulis, (err) => {
//     if (err) {
//         console.error("Error yang muncul");
//     } else {
//         console.log("file sudah tulis");
//     }
// });
// // contoh lain fs CRUD
// fs.readFile("example.txt", (err) => {});

// // OTHER in-built example path
// const path = require("path");
// const { log } = require("console");

// const tempatPath = path.join();
// const filePath = path.join(__dirname, "fail", "contoh.txt"); //* Hasilkan
// console.log("nama fail", path.basename(filePath));
// console.log("nama fail", path.basename(filePath));
// console.log("nama fail", path.basename(filePath));
// console.log("nama fail", path.basename(filePath));

// var path = require("path");
// //Return the directries:
// const pathDir = path.join();
// var directories = path.join("dalam", "fileKedua", "contoh.pdf");
// console.log("Normalize", path.normalize(directories));
// console.log("EXTname", path.extname(directories));
// console.log("Dirname", path.dirname(directories));
// console.log("Basename", path.basename(directories));

// ! Day 3 - built-in module http
// const http = require("http");
// const { stringify } = require("querystring");
// const server = http.createServer((req, res) => {
//     const url = req.url.toLowerCase();
//     console.log(url);

//     if (url === "/") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.write("Home default");
//         res.end();
//         return;
//     }

//     if (url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.write("About need to put slash /about to access");
//         res.end();
//         return;
//     }
//     if (url === "/youtube") {
//         res.writeHead(301, { location: "https://www.youtube.com" });
//         res.end();
//         return;
//     }
//     if (url === "/json") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write(JSON.stringify({ name: "Jason", age: 20 }));
//         res.end();
//     } else {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         res.write("Page not found");
//         res.end();
//     }
// });

// // listen port
// const PORT = 8989;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// http://localhost:8989

//! Day 3 - Mini Project using fs, http and path module
const http = require("http");
const fs = require("fs");
const path = require("path");

// read html pages and paths
const indexHtmlPath = path.join(__dirname, "pages", "index.html");
const indexHtml = fs.readFileSync(indexHtmlPath, "utf-8");

const projectsHtmlPath = path.join(__dirname, "pages", "projects.html");
const projectsHtml = fs.readFileSync(projectsHtmlPath, "utf-8");

const htmlNotFoundPath = path.join(__dirname, "pages", "404.html");
const htmlNotFound = fs.readFileSync(htmlNotFoundPath, "utf-8");

// using async to read file
let indexHtml2;
fs.readFile(indexHtmlPath, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        indexHtml2 = data;
    }
});
console.log(indexHtml2);

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(indexHtml);
            res.end();
            break;
        case "/projects":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(projectsHtml);
            res.end();
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write(htmlNotFound);
            res.end();
    }
});

const PORT = 8989;
server.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
});

// http://localhost:8989
console.log(indexHtmlPath);

// ! Day 4
