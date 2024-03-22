// ? Import
const file1 = require("./utils");

// ! Import literals
console.log(file1.mesej);

// ! Import object
console.log(file1.price);

// ! Import function
console.log(file1.salam());
file1.salam();

console.log(file1.sum(1, 2));
file1.sum(2, 4);

// ! Simplest method
const { salam, sum } = require("./utils");
salam();
sum(3, 6);
