console.log("It worked!");
let getRandomPokemonButtonHTML = document.querySelector("#getRandomPokemonButton");
getRandomPokemonButtonHTML.addEventListener("click", function() {
    let fetchPromise = fetch("https://cs-pokemon-api.onrender.com/pokemon/team");
    fetchPromise.then( (response) => {
        const jsonPromise = response.json();
        jsonPromise.then( (data) => {
        console.log(data);
        let pokemonCardHTML = document.getElementsByClassName("pokemonCard");
        let pokemonNameHTML = document.getElementsByClassName("pokemonName");
        let pokemonTypeHTML = document.getElementsByClassName("pokemonType");
        let pokemonFooter = document.getElementsByClassName("footer")

        for (let i = 0; i < pokemonCardHTML.length; i++) {
            let pokemonImage = pokemonCardHTML[i].querySelector("img");
            pokemonImage.src = data[i].image_url;
            pokemonNameHTML[i].innerHTML = data[i].title;
            pokemonTypeHTML[i].innerHTML = data[i].type;
            let pokemonType = data[i].type;
            switch (pokemonType) {
                case "Fire":
                    pokemonFooter[i].style.backgroundColor = "red";
                    break;
                case "Grass":
                    pokemonFooter[i].style.backgroundColor = "green";
                    break;
                case "Electric":
                    pokemonFooter[i].style.backgroundColor = "yellow";
                    break;
                case "Water":
                    pokemonFooter[i].style.backgroundColor = "blue";
                    break;
                case "Fairy":
                    pokemonFooter[i].style.backgroundColor = "pink";
                    break;
                case "Bug":
                    pokemonFooter[i].style.backgroundColor = "black";
                    break;
                case "Poison":
                    pokemonFooter[i].style.backgroundColor = "purple";
                    break;
                case "Ground":
                    pokemonFooter[i].style.backgroundColor = "brown";
                    break;
                case "Normal":
                    pokemonFooter[i].style.backgroundColor = "brown";
                    break;
            }
        }
    })
})
})
