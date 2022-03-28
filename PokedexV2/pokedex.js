const fetchPokemon = () =>{
    const pokeName = document.getElementById("txtPokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        if(res.status != "200")
        {
            console.log(res);
            imagen("./img/caritatriste.png");
        }
        else
        {
            return res.json();
        }

    }).then((data) => {

        console.log(data);
        let pokeImg = data.sprites.front_default;
        imagen(pokeImg);
    })
}

const imagen = (url) => {
    const pokeImg  = document.getElementById("imgPokemon");
    pokeImg.src = url;
    console.log(url);
}
