function getAbility(){
    let name = document.getElementById("Search").value;

    if(name === undefined){
        throw new Error(`Pokémon ${name} não encontrado!`);
    }

    pegar(name);
        
}
function pegar(name){
    const nomeCortado = name.trim().toLowerCase().replace(` `, '-')
     fetch(`https://pokeapi.co/api/v2/ability/${nomeCortado}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Pokémon ${nomeCortado} não encontrado!`);
            }
            return response.json();
        })
        .then(data => {

            const abiDesc = data.effect_entries[1].effect;
            
            document.getElementById("AbiDesc").textContent = abiDesc;
            console.log(data.effect_entries[1].effect);








        })
    }