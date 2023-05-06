const boton_copiar = "b-copiar";
const texto_usuario = document.querySelector('.texto-usuario');
const texto_encriptado = document.querySelector('.texto-encriptado');

// oculta el elemento que se desea
function ocultar(elemento){
    document.getElementById(elemento).style.visibility = 'hidden';
}

//muestra algun elemento oculto
function mostrar(elemento){
    document.getElementById(elemento).style.visibility = 'visible';
}

ocultar(boton_copiar);

function btn_encriptado(){
    document.getElementById("texto-encriptado").style.display = "block";
    const encriptado = encriptar(texto_usuario.value);
    texto_encriptado.value = encriptado;
    mostrar(boton_copiar);
    texto_usuario.value = "";
}

function encriptar(textoEncriptado){
    let matriz_cambio = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i = 0; i < matriz_cambio.length; i++){
        if(textoEncriptado.includes(matriz_cambio[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matriz_cambio[i][0],matriz_cambio[i][1]);
        }
    }
    return textoEncriptado;
}

function btn_desencriptado(){
    document.getElementById("texto-encriptado").style.display = "block";
    const desencriptado = desencriptar(texto_usuario.value);
    texto_encriptado.value = desencriptado;
    mostrar(boton_copiar);
    texto_usuario.value = "";
}

function desencriptar(textoEncriptado){
    let matriz_cambio = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();
    for(let i = 0; i < matriz_cambio.length; i++){
        if(textoEncriptado.includes(matriz_cambio[i][1])){
            textoEncriptado = textoEncriptado.replaceAll(matriz_cambio[i][1],matriz_cambio[i][0]);
        }
    }
    return textoEncriptado;
}