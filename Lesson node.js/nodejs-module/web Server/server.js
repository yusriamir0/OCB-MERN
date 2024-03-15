// http server method

const http = require("http");
const { text } = require("stream/consumers");
// console.log(http);

// create server using createServer((req,res)=>{}) method
const server = http.createServer((req, res) => {
    // response header - using writeHead(statusCode, {}) method
    res.writeHead(200, { "Content-Type": "text/html" }); // content type is adjustable
    //send data to user
    res.write("Apa khabar di sana?");
    // end the response
    res.end();
});
// console.log(server);

// Listen the server using listen(port, cb()) method
server.listen(555, () => {
    console.log("Server tengah berjalan dan berlari");
});

// http://localhost:555
