var textoNombre= window.sessionStorage.getItem("--nombreGuardado");
var colorPaginas = window.sessionStorage.getItem("--colorNormal");
var tamFuent = window.sessionStorage.getItem("--tamañoGuardado");
if(textoNombre!=null){
    ponerNombre();
}else{
    ponerTextoPorDefecto();
}

if(colorPaginas!=null){
    cambiarColor();
}
if(tamFuent!=null){
    cambiarTam();
}

function ponerTextoPorDefecto(){
    document.getElementById('nombre').innerHTML="usuario activo: sin identificar";
}
function ponerNombre(){
    document.getElementById('nombre').innerHTML="usuario activo: "+ 
    sessionStorage.getItem("--nombreGuardado");
}
function cambiarColor(){
    document.documentElement.style.setProperty("--colorNormal", sessionStorage.getItem("--colorNormal"));
}

function cambiarTam(){
    document.documentElement.style.setProperty("font-size",sessionStorage.getItem("--tamañoGuardado"));
}

function aplicarCambios() {
    // mostramos en consola los valores recogidos en la pagina
    var color = document.getElementsByName('colorElegido')[0];
    console.log('color elegido ' + color.value);

    var tam = document.getElementsByName('tamFuente')[0];
    var tamelegido = tam[tam.selectedIndex].value;

    var nombre = document.getElementById('inputUsuario');
    console.log('el nombre es ' + nombre.value);


    //escribo el nombre
    sessionStorage.setItem("--nombreGuardado",nombre.value);
    ponerNombre();
    //document.getElementById('nombre').innerHTML="usuario activo: " + nombre.value;
    

    // aplicamos el tamaño a todo el documento
    sessionStorage.setItem("--tamañoGuardado",parseFloat(tamelegido) + "rem")
    cambiarTam();

    //cambiar color
    sessionStorage.setItem("--colorNormal",color.value);
    cambiarColor();

    document.getElementById('mensaje').innerHTML = "APLICADO";
}


function ultimaOpcionModal(){
    document.getElementById('modal').style.top = 0;

}
function cerrarModal(){
    document.getElementById('modal').style.top = -100;
}