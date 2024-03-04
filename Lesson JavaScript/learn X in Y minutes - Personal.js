// ! String //
let myString = "Hello World";

// charAt() - Access string
const myStringAccess = myString.charAt(1);
myStringAccess;

// substring() - Access string at target characters *(start ambil, start buang)
const myStringSubString = myString.substring(1, 3);
myStringSubString;

// ! Array //
let myArray = ["Alison", "Brendon", "Christiano", "Drogba", true, 2020];

// Length - jumlah value dalam array
let myArrayLength = myArray.length;
myArrayLength;

// Replace value according to Index[] assign
myArray[2] = "Charles";

// Push - masukkan nilai di belakang array
const myArrayPush = myArray.push("Emmanuel");
myArrayPush;
myArray;

// Pop - buang nilai dari belakang array
const myArrayPop = myArray.pop();
myArray;

// Find index value
console.log(myArray[2]);

// unshift - masukkan nilai di hadapan array
const myArrayUnshift = myArray.unshift("0wubue");
myArray;

// shift - buang nilai dari hadapan array
const myArrayShift = myArray.shift();
myArray;

// join - join/rapatkan dengan , semua value yang ada dalam array
let myArrayNumber = [1, null, true, 5, 6, "tujuh"];
const myArrayJoin = myArrayNumber.join();
myArrayNumber;
myArrayJoin;

// slice - ambil sub-array dalam array (start ambil, start buang) *endNumber boleh letak -ve yang bermula dari belakang array
myArray;
const myArraySlice = myArray.slice(2, 4);
myArraySlice;

// sp[ut]lice - (start put, start buang di start put, letak apa di start put)
myArray;
const myArraySplice = myArray.splice(1, 4, "Gakpo", null, false, undefined);
myArray;

// ! Object //

let myObj = {
    key1: "Nilai pertama",
    key2: "Nilai kedua",
    "Kunci pertama": 10,
};
console.log(myObj["Kunci pertama"]);
console.log(myObj.key1);

// ! Logic and Control Structures //

// if statement //
let nilai = 1;
if (nilai == 3) {
    console.log(`Nilainya ialah ${[nilai]}`);
} else if (nilai == 4) {
    console.log(`Nilainya ialah ${[nilai]}`);
} else {
    console.log(`Nilainya ialah ${[nilai]}`);
}

// ! Loop

// for - (initialization; continue condition; iteration)
let senaraiUmur = "";
for (initial = 0; initial < myArray.length; initial++) {
    senaraiUmur += " Umur pelajar ini ialah " + initial + " tahun, ";
}
console.log(senaraiUmur);

// [var] while loop - infinite loop //
let senaraiNama = "";
let i = 1;
while (i <= 10) {
    senaraiNama += " Nama yang ke " + i + ",";
    i++;
}
console.log(senaraiNama);

// [var] do while loop //
