let muneco = "img-muneco";
let boton_copiar = "b-copiar";
let encriptado = false;
let boton_encriptar = document.getElementById("b-encriptar");

function ocultar(elemento){
    document.getElementById(elemento).style.visibility = 'hidden';
}

function mostrar(elemento){
    document.getElementById(elemento).style.visibility = 'visible';
}

function encriptar(){
    let texto = document.getElementById("texto-usuario").value;
    alert(texto);
    document.getElementById("texto-usuario").value = "";
}

boton_encriptar.onclick = encriptar;

if (encriptado){
    ocultar(muneco);
}

