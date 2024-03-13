// Lesson #1
// const fs = require("fs");
// Create file
// fs.writeFile("index.html", "hello world", function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created");
//     }
// });

// Lesson #2 - Create file using async-await
// const fs = require("fs/promises");
// const buatFail = async () => {
//     try {
//         await fs.writeFile("login.html", "Welcome to login page");
//         console.log("File created");
//     } catch (error) {
//         console.log("Please try again");
//     }
// };
// buatFail();

// Lesson #2.1 - invoke parameter
// const fs = require("fs/promises");

// const buatFail = async (createFile, contentSentence) => {
//     try {
//         await fs.writeFile(createFile, contentSentence);
//         console.log("File created");
//     } catch (error) {
//         console.log("Please try again");
//     }
// };
// buatFail("file.pdf", "This sentence is created out from node terminal");

// Lesson #3 - Read file using readFileSync method
// const fs = require("fs");
// Read from a file
// const readFile = fs.readFileSync("file.pdf");
// console.log(readFile.toString());

// Lesson #3.1 - Read file using readFile method
const fs = require("fs");
const readFile = fs.readFile("file.pdf", function (salah, betul) {
    if (salah) {
        console.log(salah);
    }
    console.log(betul.toString());
});
