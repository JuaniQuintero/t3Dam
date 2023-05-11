'use strict';


function hover(identificador){
    let elem=document.getElementById(identificador);
    elem.style.backgroundColor="green";
}
function deshover(identificador){
    let elem=document.getElementById(identificador);
    elem.style.backgroundColor="yellow";
}
function dibujarElemento(identificador){
    let elem=document.getElementById(identificador);
    elem.innerHTML="O";
}
