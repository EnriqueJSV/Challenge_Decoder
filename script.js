let muneco = "img-muneco";
let boton_copiar = "b-copiar";
let encriptado = false;
let boton_encriptar = document.getElementById("b-encriptar");

// oculta el elemento que se desea
function ocultar(elemento){
    document.getElementById(elemento).style.visibility = 'hidden';
}

//muestra algun elemento oculto
function mostrar(elemento){
    document.getElementById(elemento).style.visibility = 'visible';
}

// encripta el mensaje ingresado por el usuario
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
    document.getElementById("texto-usuario").value = ""; //Borra el contenido ingresado por el usuario del textarea
}

// conecta el boton para encriptar al codigo anterior
boton_encriptar.onclick = encriptar;

// si no se ha encriptado ningun mensaje va a ocultar el boton de copiar, caso contrario oculta la imagen y muestra el texto encriptado
if (!encriptado){
    ocultar(boton_copiar);
}

