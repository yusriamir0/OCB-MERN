// string
const perkataan = "ini adalah jenis string";

// number
const nombor = 1234;
const nomborPi = 3.14;
const nomborNegatif = -1234;

// boolean
const betulAtauSalah = true;
const salah = false;

// null
const kosong = null;
console.log(kosong);

// object ada key dan value
const object = {
    nama: "John",
    umur: 18,
};

// array - ada value sahaja

const array = [1, 2, 3];

// function

const fungsi = () => {
    return "ini adalah function";
};

console.log(fungsi());

// expression
const a = 10;
const b = 20;
const c = 5 + a + b;
console.log(c);

const nama = "faiz";
const age = 18;
const greeting = "hai " + nama + "umur " + age;
console.log(greeting);

const umurSekarang = 18;
const hadUmur = 20;
const masihMuda = umurSekarang < hadUmur;
console.log(masihMuda);

const fungsiBaru = (nama, umur) => {
    return "hai " + nama + ", umur " + umur;
};

console.log(fungsiBaru("faiz", 18));
console.log(fungsiBaru("ali", 22));

// comparison operators
// equal to
var r = 10;
var s = 20;
console.log(r == s);
// not equal to
var r = 10;
var s = 20;
console.log(r != s);
// greater than
var r = 10;
var s = 20;
console.log(r > s);

/** Other Example Comaprison for == */
const namaBaru = "ali";
const namaOrangLain = "abu";

console.log(namaBaru !== namaOrangLain);

/** Other Example Comaprison for === */
const harga = 18;
const hargaKawan = 20;
const hargaLabel = "18";

console.log(hargaLabel === harga);
console.log(hargaLabel == harga);

/** Logical Operators */

// and
var ad = 10;
var ae = 20;
console.log(ad < 20 && ae > 10);

// other example
console.log("true and true", true && true);
console.log("true and false", true && false);
console.log("true and false", true || false);
console.log("true and false", false || false);

console.log("NOT true", !true);
console.log("NOT TRUE and FALSE", !(true && false));

// Ternary operator
var ao = 10;
var ap = 20;
// if (ao > ap) {
//     return true;
// } else {
//     false;
// }
var aq = ao > ap ? true : false;
console.log(aq);

let ao2 = "20";
ao2 = 20;

console.log(typeof ao2);
