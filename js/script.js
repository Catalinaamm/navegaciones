const burger = document.querySelector(".burger")

function visualizarLista(){
    const lista = document.querySelector(".lista");
    const lista__li = document.querySelectorAll(".lista__li");
    console.log(lista__li)
    lista.classList.toggle("lista--activada");
    burger.classList.toggle("toggle");
    lista__li.forEach((li,index) => (li.style.transition = `all ${1*index + 0.9}s`));
}

burger.addEventListener("click",visualizarLista)