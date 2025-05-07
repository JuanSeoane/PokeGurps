function getAbility(){
    let move = document.getElementById("Search").value;

    if(move === undefined){
        throw new Error(`Pokémon ${move} não encontrado!`);
    }

    pegar(move);
        
}
function Getmove(move){
    fetch(`https://pokeapi.co/api/v2/move/${move}/`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Pokémon não encontrado!`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.effect_entries[0].effect);
    })
    



}
Getmove("water-gun");