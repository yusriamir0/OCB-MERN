// fetch("https://pokeapi.co/api/v2/pokemon/charizard");
// .then((balasan) => {
//     if (!balasan.ok) {
//         throw new Error("Tiada dalam database. Cer cuba lagi");
//     }
//     return balasan.json();
// })

// .then((data) => console.log(`${data.name} ada dalam database`))
// .then((data) => data.json())
// .then((data) => console.log(data))
// .catch((kesilapan) => console.log(kesilapan));
fetchData();

async function fetchData() {
    try {
        const response = await fetch(
            "https://pokeapi.co/api/v2/pokemon/pikachu"
        );

        if (!response.ok) {
            throw new Error("karektor ini tiada dalam database");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
