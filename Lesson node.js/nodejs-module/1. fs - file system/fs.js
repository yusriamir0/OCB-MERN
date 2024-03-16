// Lesson 1 - Create a file
// const fs = require("fs");
// Create file
// fs.writeFile("index.html", "hello world", function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("File created");
//     }
// });

// Lesson 2 - Create file using async-await
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

// Lesson 2.1 - Create a file by invoking the parameter
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

// Lesson 3 - Read file using readFileSync method
// const fs = require("fs");
// Read from a file
// const readFile = fs.readFileSync("file.pdf");
// console.log(readFile.toString());

// Lesson #3.1 - Read file using readFile method
// const fs = require("fs");
// const readFile = fs.readFile("file.pdf", function (salah, betul) {
//     if (salah) {
//         console.log(salah);
//     }
//     console.log(betul.toString());
// });

// Lesson 4 - Rename a file using rename(oldfile, newfile, (callback) => {})
// const fs = require("fs");
// fs.rename("failLBaru.pdf", "failLagiBaru.pdf", (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("File rename successfully");
// });

// Lesson 5 - Copy a data from another file using copyFile(oldPath, newPath, (callback))
// const fs = require("fs");
// fs.copyFile("index.docx", "failFS.pdf", (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("File copy successfully");
// });

// Lesson 6 - Insert/append new data using appendFile(oldPath, newPath, (callback) =>)
// const fs = require("fs");
// fs.appendFile("index.html", " " + "This is new sentence", (error) => {});

// Lesson 7 - Remove/truncate a number of character string inside a file using truncateFile(path, noCharNeeded, callbackFn())
// const fs = require("fs");
// fs.truncate("index.html", 250, (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("Successfully removed the number of characters");
//     }
// });

// Lesson 8 - stat file using stat(filePath, callbackFn)
// const fs = require("fs");
// fs.stat("index.html", (error, stats) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(stats);
//     }
// });

// Lesson 9 - Delete a file using unlink(filePath, callbackFn)
// const fs = require("fs");
// fs.unlink("login.html", (error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log("File deleted");
//     }
// });

// Lesson 10 - Creating a folder using mkdir(fileName, callbackFn)
// const fs = require("fs");
// fs.mkdir("Folder Baru/src", (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("Folders created successfully");
// });

// Lessson 10.1 - Read directory using readdir(dirName, callbackFn)
// const fs = require("fs");
// fs.readdir("Folder Baru", (error, files) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(files);
// });

// Lesson 10.2 - Delete the directory using rmdir
// const fs = require("fs");
// fs.rmdir("Folder Baru/src", (error) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("Folder deleted");
// });
