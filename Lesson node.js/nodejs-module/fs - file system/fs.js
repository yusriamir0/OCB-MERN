// const fs = require("fs");
// Create file

// Lesson #1
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
const fs = require("fs/promises");

const buatFail = async (createFile, contentSentence) => {
    try {
        await fs.writeFile(createFile, contentSentence);
        console.log("File created");
    } catch (error) {
        console.log("Please try again");
    }
};
buatFail("file.pdf", "This sentence is created out from node terminal");
