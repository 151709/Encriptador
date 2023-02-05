const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#text-resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const munhieco = document.querySelector(".contenedor-munhieco");
const parrafo = document.querySelector(".parrafo");

const contenedorErrores = document.querySelector(".contenedor-errores");

function validarMensaje(){
    //srtinTextArea = srtinTextArea.toLowerCase();
    let erroresPrevios = contenedorErrores.querySelectorAll(".error");
    for(let err of erroresPrevios){
        contenedorErrores.removeChild(err);
    }
    //srtinTextArea = srtinTextArea.toLowerCase();
    var mensaje = inputMensaje.value;
    let letrasValidas = "abcdefghijklmnñopqrstuvwxyz ";
    let mensajeError = document.createDocumentFragment();
    for(let letra of mensaje){
        if(!letrasValidas.includes(letra)){
            let p = document.createElement("p");
            p.setAttribute("class", "error");
            //p.textContent = "No se permiten mayusculas";
            p = alert("No se permiten mayúsculas")
            mensajeError.appendChild(p);
        }
    }
    contenedorErrores.appendChild(mensajeError);
    if (mensajeError.children.length === 0){
        return true;
    }
}

function encriptar (){
    if (!validarMensaje()) return;
    ocultarAdelante();
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    inputMensaje.value = "";
    inputResultado.value = mensajeEncriptado;
    //resultado.estilos.backgroundImage = "none";
}

function desencriptar (){
    //if (validarMensaje()) return;
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    
    inputResultado.value = mensaje;

}

function ocultarAdelante(){
    munhieco.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function copiar (){
    var mensajeEncriptado =inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;