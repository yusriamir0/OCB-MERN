// ! LESSON 1 http server method
const http = require("http");
// console.log(http);

// fs fail untuk import dan buat fail dalam server
const fs = require("fs");
const { log } = require("console");

// ! LESSON 2 create server using createServer((req,res)=>{}) method
const server = http.createServer((req, res) => {});
//     // response header - using writeHead(statusCode, {}) method
//     res.writeHead(200, { "Content-Type": "text/plain" }); // content type is adjustable
//     //send data to user
//     res.write("Apa khabar di sana? Kalau awak nampak maksudnya menjadi");
//     // end the response
//     res.end();
// });
// console.log(server);

// ! LESSON 3 Listen to the server using listen(port, cb()) method
server.listen(555, () => {
    console.log("Server tengah berjalan dan berlari");
});

// http://localhost:555

// buat login page
// fs.writeFile("login.html", `<h1>This is Login page</h1>`, (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("The login file has been created");
//     }
// });

//  buat register page
// fs.writeFile("register.html", `<h1>This is Register page</h1>`, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("The register file has been created");
//     }
// });

// ! LESSON 4 Listen to an event eg. on()
server.on("request", (req, res) => {
    // if (req) {
    //     console.log(req); //? nak tengok apa maklumat dalam on event
    // }
    const url = req.url; //? nak tengok maklumat dalam url
    if (url === "/login") {
        fs.readFile("login.html", (err, maklumat) => {
            if (err) {
                //? semak error
                console.log(err);
            } else {
                // ? semak success
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(maklumat);
                res.end();
            }
        });
    }
    if (url === "/register") {
        fs.readFile("register.html", (err, maklumat) => {
            if (err) {
                //? semak error
                console.log(err);
            } else {
                // ? semak success
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(maklumat);
                res.end();
            }
        });
    }
    if (url === "/") {
        fs.readFile("home.html", (err, maklumat) => {
            if (err) {
                //? semak error
                console.log(err);
            } else {
                // ? semak success
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(maklumat);
                res.end();
            }
        });
    }
});
// http://localhost:555/login
