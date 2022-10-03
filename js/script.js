const burger = document.querySelector(".imagx")

function visualizarLista(){
    const lista = document.querySelector(".lista");
    const lista__li = document.querySelectorAll(".lista__li");
    console.log(lista__li)
    lista.classList.toggle("lista--activada");
    burger.classList.toggle("toggle");
    lista__li.forEach((li,index) => (li.style.transition = `all ${1*index + 0.9}s`));
}

burger.addEventListener("click",visualizarLista)

let imagen = document.querySelector(".imagx");
let negro = document.querySelector(".color5");
let color = document.querySelector(".titulo")
let igual = document.querySelector(".enorden")
let nav = document.querySelector(".nav")
let foo = document.querySelector(".foo")

negro.addEventListener("click", colorNegro);
imagen.addEventListener("click", cambiarColor);
color.addEventListener( "click", colorSalmon);
igual.addEventListener("click", colorIgual);
nav.addEventListener("click",cambiarNav);
foo.addEventListener("click", footer);

function footer(){
    foo.style.backgroundColor = "#723f39"
}

function cambiarNav(){
    nav.style.backgroundColor = "#723f39"
}

function colorIgual(){
    igual.style.backgroundColor = "#723f39"
}

function colorSalmon(){
    color.style.backgroundColor = "#723f39"
}
function colorNegro(){
    negro.style.backgroundColor = "#e9a18b"
}
function cambiarColor(){
    imagen.style.backgroundColor = "#e9a18b" ;
}
