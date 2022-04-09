
let nCartas = prompt("insira a quantidade de cartas:");
let gifs = [`bobrossparrot.gif`,`explodyparrot.gif`,`fiestaparrot.gif`,`metalparrot.gif`,`revertitparrot.gif`,`tripletsparrot.gif`,`unicornparrot.gif`];
let aux1=[];


function comparador() { 
	return Math.random() - 0.5; 
}

function entrada(cartas){
    while(cartas > 14 || cartas < 4 || cartas%2!=0){
        cartas = prompt("insira a quantidade de cartas:");
    }
    embaralha(cartas);
}

function embaralha(cartas){
    const organizaCartas = document.querySelector(".jogo");
    for(let i=0;i<cartas/2;i++){
        aux1[i]=gifs[i];
    }
    for(let i=0;i<cartas/2;i++){
        aux1.push(gifs[i])
    }
    aux1.sort(comparador);
    for(let i=0; i<cartas/2;i++){
        organizaCartas.innerHTML += `
        <div class="cartas">
            <img class="escondido" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">
            <img  src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${aux1[i]}">
        </div>`;
    }
    for(let i=cartas/2;i<cartas;i++){
        organizaCartas.innerHTML += `
        <div class="cartas">
            <img class="escondido" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">
            <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${aux1[i]}">
        </div>`;
    }
}

entrada(nCartas);



