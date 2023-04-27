'use strict';

var colorfuente="white";
const colores = new Array("red","pink","yellow","green","beige");
const colores2=[];
colores2[0]="red";
colores2[1]="pink";
colores2[2]="yellow";
colores2[3]="green";
colores2[4]="beige";



function saludar(identificador){
    let elem=document.getElementById(identificador);
    elem.style.color=colorfuente;
    elem.innerHTML="Hola";
    colorfuente=getComputedStyle(elem).backgroundColor;
}

function pintar(){
    for(let x = 0; x<5;x++){
         let ident = "c"+(x+1);
         let cf= colores2[x];
         rellenar(ident,cf);
    }
 }

function rellenar(identificador,colorfondo){
    let elem=document.getElementById(identificador);
    elem.style.backgroundColor=colorfondo;
}

pintar();