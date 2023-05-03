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
    let textaux = "";
    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textaux += "ai";
            continue;
        } 
        else if(texto[i] == "e"){
            textaux += "enter";
            continue;
        }
        else if(texto[i] == "i"){
            textaux += "imes";
            continue;
        }
        else if(texto[i] == "o"){
            textaux += "ober";
            continue;
        }
        else if(texto[i] == "u"){
            textaux += "ufat";
            continue;
        }
        textaux += texto[i];
    }
    alert(textaux);
    document.getElementById("texto-usuario").value = "";
}

boton_encriptar.onclick = encriptar;

if (encriptado){
    ocultar(muneco);
}

