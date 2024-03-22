console.log("Hello there!");

// console.log(module);

// ! Export literal
module.exports.mesej = "Welcome to the jungle";

// ! Export object
module.exports = {
    productName: "Macbook Pro",
    price: 1000,
    desc: "Laptop",
};

// ! Export function
const salam = () => {
    console.log("Apa khabar");
};

const sum = (a, b) => {
    console.log(a + b);
};

module.exports = {
    salam,
    sum,
};
