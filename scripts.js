
let nCartas = prompt("insira a quantidade de cartas:");
let gifs = [`bobrossparrot.gif`,`explodyparrot.gif`,`fiestaparrot.gif`,`metalparrot.gif`,`revertitparrot.gif`,`tripletsparrot.gif`,`unicornparrot.gif`];
let aux1=[];
let auxCarta;
let cont = 0;
let cartas = "";
let back = "";
let front = "";
let aux = [];


function comparador() { 
	return Math.random() - 0.5; 
}

function entrada(nCartas){
    while(nCartas > 14 || nCartas < 4 || nCartas%2!=0){
        nCartas = prompt("insira a quantidade de cartas:");
    }
    for(let i=0;i<nCartas/2;i++){
        aux1.push(gifs[i]);
        aux1.push(gifs[i]);
    }
    return aux1;
}
let embaralhadas = entrada(nCartas).sort(comparador);

const organizaCartas = document.querySelector(".jogo");
for(let i=0; i<nCartas;i++){
    let cartas = `
    <div class="cartas" onclick="mostra(this)">
        <div class="back-face">
            <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">
        </div>
        <div class="front-face transf">
            <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${embaralhadas[i]}">
        </div>
    </div>`;
    organizaCartas.innerHTML+=cartas;
}
function mostra(carta){
    cont++;
    cartas = carta;
    back = cartas.querySelector(".back-face");
    front = cartas.querySelector(".front-face");
    imagem = front.querySelector("img").src;
    let mostrada = {cartas:"",back:"",front:"",imagem:""};
    mostrada.cartas = cartas;
    mostrada.back = back;
    mostrada.front = front;
    mostrada.imagem = imagem;
    back.classList.toggle("transf");
    front.classList.toggle("transf");
    cartas.setAttribute("onclick", "");
    aux.push(mostrada);
    console.log(aux);
    verifica();  
    verificaFim();
}
function virarCartas(){
    let carta1 = aux[0].cartas;
    let back1 = aux[0].back;
    let front1 = aux[0].front;
    back1.classList.toggle("transf");
    console.log(back1)
    console.log(front1)
    front1.classList.toggle("transf");
    carta1.setAttribute("onclick","mostra(this)");
    let carta2 = aux[1].cartas;
    let back2 = aux[1].back;
    let front2 = aux[1].front;
    back2.classList.toggle("transf");
    front2.classList.toggle("transf");
    carta2.setAttribute("onclick","mostra(this)");
    aux=[];
}
let pontos=0;
console.log(aux.length)
function verifica(){
    if(aux.length === 2){
        let imagem1 = aux[0].imagem;
        let imagem2 = aux[1].imagem;
        if(imagem1===imagem2){
            aux=[];
            pontos++;
        }
        else{
            setTimeout(virarCartas,1*1500);
        }
    }  
}
function verificaFim(){
    if(pontos === nCartas/2){
        setTimeout(fim,0.5*1000);
    }
}
function fim(){
    alert(`Você ganhou em ${cont} jogadas!`);
}

entrada(nCartas);



