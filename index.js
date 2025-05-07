function getPokemon(){
    let name = document.getElementById("Search").value;

    if(name === undefined){
        throw new Error(`Pokémon ${name} não encontrado!`);
    }

    pegar(name);
        
}

function pegar(name){

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Pokémon ${name} não encontrado!`);
            }
            return response.json();
        })
        .then(data => {
           
           
            //Level do pokemon
            var levelPoke = document.getElementById("ListadeNiveis").value;
            let ivsAleatorios = [];

        for (let i = 0; i < 6; i++) {
            let Randomivs = Math.floor(Math.random() * 31) + 1;  // Gera um número entre 1 e 100
            ivsAleatorios.push(Randomivs);  // Adiciona o número ao array
                                    }

            console.log(ivsAleatorios); 
                                    console.log(ivsAleatorios[0]);
        
            
            
            

            
            //Pokestats
          var Pokehp = data.stats[0].base_stat;
          var Pokeatk = data.stats[1].base_stat;
          var Pokedef = data.stats[2].base_stat;
          var Pokespa = data.stats[3].base_stat;
          var Pokespdef = data.stats[4].base_stat;
          var Pokespe = data.stats[5].base_stat;
          const Altura = data.height;
          const Peso = data.weight;
          

           
           let hp = Math.floor(((2 * Pokehp + ivsAleatorios[0]) * levelPoke/101) + levelPoke+1);                      
           let baseDX = Math.floor(((2 * (Pokespe/4) + ivsAleatorios[5]) * levelPoke/100) + 5);
           let spa = Math.floor(((2 * (Pokespa/3) + ivsAleatorios[3]) * levelPoke/100) + 5);
           let atk = Math.floor(((2 * (Pokeatk/3) + ivsAleatorios[1]) * levelPoke/100) + 5);
           let def = Math.floor(((2 * (Pokedef/3) + ivsAleatorios[2]) * levelPoke/100) + 5); 
           let spdef = Math.floor(((2 * (Pokespdef/3) + ivsAleatorios[4]) * levelPoke/100) + 5);
           document.getElementById("Rivs").textContent = ivsAleatorios; 
           var vel = Math.floor((baseDX + def)/4) ;
           console.log(vel);

            document.getElementById("HP").textContent = hp;  
            document.getElementById("ST").textContent = atk;
            document.getElementById("IQ").textContent = spa;
            document.getElementById("HT").textContent = def;
            document.getElementById("DX").textContent = baseDX;
            document.getElementById("Von").textContent = spdef;
            document.getElementById("Peso").textContent = `${Math.floor(Peso/2.205)}kg`;
            document.getElementById("Altura").textContent =  `${Math.floor((Altura/2) * 30.48)}cm`;

            //H1 com o nome do pokemon
            const pokeName = document.getElementById("pokename");
            pokeName.style.fontFamily = "Helvetica";
            document.getElementById("pokename").textContent = `( ${name.toUpperCase()} )`;

            //Imagem do pokemon
            const pokeSprite = data.sprites.front_default;
            const imgElement = document.getElementById("pokeSprite");
            imgElement.src = pokeSprite;
            imgElement.style.display = "block";
         
                
            
          
           
        })
        .catch(error => {
            const resultadoDiv = document.getElementById('PokeStats');
            resultadoDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;









            
        });
       

    
}

function refreshPage(){

    location.reload();
}
