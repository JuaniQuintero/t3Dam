'use strict';

var identificadores = [[document.getElementById("c1"),"c2","c3"],["c4","c5","c6"],["c7","c8","c9"]];

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
function basica(){
    let gano=false;
    for(let x=0;x<3;x++){
        for(let y=0; y<3; y++){
            if(identificadores[0][0]=="O"){
                
            }
        }
    }
}