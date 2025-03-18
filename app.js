// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo =[];

function agregarAmigo(){
let inputAmigo= document.getElementById("amigo");
let nombreDeAmigo= inputAmigo.value;
if (!nombreDeAmigo) {
        alert("Ingresa un nombre por favor :D"); 
                return;   
    }
    amigo.push(nombreDeAmigo);
    inputAmigo.value="";
    inputAmigo.focus(); //document.querySelector("amigo").value = "";
    monstrarAmigos();
}

function monstrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);      
    }
}

function sortearAmigo() {
    if(amigo.length < 2 ){
        alert("Necesitas almenos 2 amigos para el sorteo");
        return;
    }
    
    let amigoSorteado = amigo[Math.floor(Math.random()*amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML="";
    boxClean();
} 

function boxClean(){
    let valorBox = document.querySelector('#amigo');
    valorBox.value = '';
}