function Pegaids(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Pokémon não encontrado!`);
        }
        return response.json();
    })
    .then(pokemonData => {
        console.log( pokemonData );
    })
}
function PegaidSprite(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Pokémon não encontrado!`);
            }
            return response.json();
        })
        .then(pokemonData => {
            const pokeSprite = pokemonData.sprites.front_default;            
            const imgElement = document.getElementById("grass");
            imgElement.src = pokeSprite;
            imgElement.style.display = "block";})
}
function GrandomMon(){
    //Gerador de id para pokemon
    
    const IdsLendarios = [
        144, 145, 146, 150, 243, 244, 245, 249, 250, 377, 378, 379, 380, 381, 
        382, 383, 384, 480, 481, 482, 483, 484, 485, 486, 487, 488, 638, 639, 
        640, 641, 642, 643, 644, 645, 646, 716, 717, 718, 785, 786, 787, 788, 
        789, 790, 791, 792, 800, 888, 889, 890, 891, 892, 894, 895, 896, 897, 
        898
      ];
      
      
      const IdsMiticos = [
        151, 251, 385, 386, 489, 490, 491, 492, 493, 494, 647, 648, 649, 719, 
        720, 721, 801, 802, 807, 808, 809
      ];
      //gerador de id de lendario
     const Rlendids = Math.floor(Math.random() * IdsMiticos.length)
     const lendids = IdsMiticos[Rlendids]
      //gerador de id de mitico
      const Rmitids = Math.floor(Math.random() * IdsMiticos.length)
     const mitiids = IdsMiticos[Rmitids]
     //Pega e bota sprite de pokemon lendario
     if(document.getElementById("Lgend").checked){
        const Rlendids = Math.floor(Math.random() * IdsLendarios.length)
                const lendids = IdsLendarios[Rlendids]

        PegaidSprite(lendids);           
     }
     //Pega e bota sprite de pokemons miticos
      else if(document.getElementById("Myth").checked){
        const Rmitids = Math.floor(Math.random() * IdsMiticos.length)
     const mitiids = IdsMiticos[Rmitids]
        PegaidSprite(mitiids);
     }       
     if(document.getElementById("Geracoes").value === "1"){
        let Idrandomgen1 = Math.floor((Math.random() * 151) + 1);
        console.log(Idrandomgen1);
        PegaidSprite(Idrandomgen1);
        
//| 001-151 | 152-251 | 252-386 | 387-493 | 494-649 | 650-721 | 722-809 | 810-905 | 906-1025
     }else if(document.getElementById("Geracoes").value === "2"){
        let Idrandomgen2 = Math.floor((Math.random() * (251 - 152) + 1)) + 152;
        console.log(Idrandomgen2);
        PegaidSprite(Idrandomgen2);
     }else if(document.getElementById("Geracoes").value === "3"){
        let Idrandomgen3 = Math.floor((Math.random() * (386 - 252) + 1)) + 252;
        console.log(Idrandomgen3);
        PegaidSprite(Idrandomgen3);
     }else if(document.getElementById("Geracoes").value === "4"){
        let Idrandomgen4 = Math.floor((Math.random() * (493 - 387) + 1)) + 387;
        console.log(Idrandomgen4);
        PegaidSprite(Idrandomgen4);
     }else if(document.getElementById("Geracoes").value === "5"){
        let Idrandomgen5 = Math.floor((Math.random() * (649 - 494) + 1)) + 494;
        console.log(Idrandomgen5);
        PegaidSprite(Idrandomgen5);
     }else if(document.getElementById("Geracoes").value === "6"){
        let Idrandomgen6 = Math.floor((Math.random() * (721 - 650) + 1)) + 650;
        console.log(Idrandomgen6);
        PegaidSprite(Idrandomgen6);
     }else if(document.getElementById("Geracoes").value === "7"){
        let Idrandomgen7 = Math.floor((Math.random() * (809 - 722) + 1)) + 722;
        console.log(Idrandomgen7);
        PegaidSprite(Idrandomgen7);
     }else if(document.getElementById("Geracoes").value === "8"){
        let Idrandomgen8 = Math.floor((Math.random() * (905 - 810) + 1)) + 810;
        console.log(Idrandomgen8);
        PegaidSprite(Idrandomgen8);
     }else if(document.getElementById("Geracoes").value === "9"){
        let Idrandomgen9 = Math.floor((Math.random() * (1025 - 906) + 1)) + 906;
        console.log(Idrandomgen9);
        PegaidSprite(Idrandomgen9);
     }
     
     else{
     let Idrandom = Math.floor((Math.random() * 1015) + 1);
     console.log(Idrandom);
 PegaidSprite(Idrandom);}


 
   }     

Pegaids(25);