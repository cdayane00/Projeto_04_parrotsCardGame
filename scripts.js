
let nCartas = prompt("insira a quantidade de cartas:");
entrada(nCartas);

function entrada(cartas){
    while(cartas > 14 || cartas < 4 || cartas%2!=0){
        cartas = prompt("insira a quantidade de cartas:");
    }
    const organizaCartas = document.querySelector(".jogo");
    for(let i=0; i<cartas;i++){
        organizaCartas.innerHTML += `
        <div class="cartas">
            <img class="escondido" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/unicornparrot.gif">
            <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">
        </div>`;
    }
    organizaCartas.sort(comparador);

}

function comparador() { 
	return Math.random() - 0.5; 
}

