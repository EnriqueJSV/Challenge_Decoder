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

ocultar(boton_copiar);

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
    // alert(textaux);
    document.getElementById("texto-usuario").value = ""; //Borra el contenido ingresado por el usuario del textarea

    document.getElementById("texto-encriptado").style.display = "block"; //Hace visible el textarea 
    document.getElementById("texto-encriptado").value = textaux; //Agrega el texto encriptado

    mostrar(boton_copiar);
}

// conecta el boton para encriptar al codigo anterior
boton_encriptar.onclick = encriptar;