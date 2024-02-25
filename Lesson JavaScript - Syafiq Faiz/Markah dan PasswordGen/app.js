let markah = [80, 99, 57, 40, 88, 39, 71];

// kirakan purata
let tambahanSemua = 0;
let jumlahNilaiDalamArray = markah.length; // tujuan letak length property untuk tahu berapa jumlah yang ada dalam array. dalam kes ni jumlahnya ialah 6 nilai

markah.forEach((nilai) => (tambahanSemua += nilai)); // callback function. yakni setiap nilai array akan jadi argument untuk dihantar ke parameter = nilai
console.log("Tambahan semua markah: " + tambahanSemua);
console.log("Jumlah nilai yang ada dalam array: " + jumlahNilaiDalamArray);

const purataMarkah = Math.round(tambahanSemua / jumlahNilaiDalamArray);
console.log("Purata markah: " + purataMarkah);

// dapatkan markah tertinggi

let sortedMarkah = markah.sort(); // sort() digunakan untuk menyusun nombor dari kecil hingga besar
console.log("Ascending order: " + sortedMarkah);
let highestMarkah = sortedMarkah[sortedMarkah.length - 1]; // ditolak 1 sebabnya
console.log("Markah tertinggi: " + highestMarkah);

// dapatkan gred

let dapatkanGred = markah.filter(function (markah) {
    if (markah >= 80) {
        // A = 80 --> 100
        console.log("Markah " + markah + "% ialah A");
    } else if (markah >= 70 && markah <= 79) {
        // B = 70 --> 79
        console.log("Markah " + markah + "% ialah B");
    } else if (markah >= 40 && markah <= 69) {
        // C = 40 --> 69
        console.log("Markah " + markah + "% ialah C");
    } else {
        // F = less than 40
        console.log("Markah " + markah + "% ialah D");
    }
});

// eg =['A', 'A', 'C', 'C', 'A', 'F']

// password generator
const perkataan = "abcdefghijklmnopqrstuvwxyz";
const nombor = "01234567890";
const simbol = "~!@#$%^&*()_+";

// tuliskan function yang menghasilkan random password menggabungkan perkataan, nombor dan symbol,
const gabungSemuaKaraktor = perkataan + nombor + simbol;

// const panjagKaraktor = gabungSemuaKaraktor.length;
// let passwordGenerator = "";
// for (let i = 0; i < length; i++) {
//     passwordGenerator += gabungSemuaKaraktor.charAt(
//         Math.floor(Math.random() * charLength)
//     );
// }

// console.log(passwordGenerator(10));

// jadikan panjang password tersebut 10 aksara
// eg $5we@#1g@

// kemasini function password generator tersebut supaya menerima beberapa parameters
// panjang
// include nombor?
// include simbol?

// function genRandonString(length) {
//     var chars =
//         "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
//     var charLength = chars.length;
//     var result = "";
//     for (var i = 0; i < length; i++) {
//         result += chars.charAt(Math.floor(Math.random() * charLength));
//     }
//     return result;
// }

// console.log(genRandonString(10));
