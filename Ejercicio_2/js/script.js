let nombreRecogido = "";
let apellidosRecogido = "";
let emailRecogido = "";
let dniRecogido = "";
let edadRecogido = "";

function carga() {

    document.getElementById("ejer2").style.visibility = "hidden";
    document.getElementById("ejer3").style.visibility = "hidden";
}



function validar(event) {
    event.preventDefault();



    nombreRecogido = document.getElementById("nombreF").value;
    document.getElementById("nombreF").disabled = true;
    apellidosRecogido = document.getElementById("apellidosF").value;
    document.getElementById("apellidosF").disabled = true;
    emailRecogido = document.getElementById("emailF").value;
    document.getElementById("emailF").disabled = true;
    dniRecogido = document.getElementById("dniF").value;
    document.getElementById("dniF").disabled = true;
    edadRecogido = document.getElementById("edadF").value;
    document.getElementById("edadF").disabled = true;
    document.getElementById("botonEnvio").disabled = true;
    document.getElementById("tablaSecundaria").setAttribute("display", "auto");


    document.getElementById("nombreModificar").value = nombreRecogido;
    document.getElementById("apellidosModificar").value = apellidosRecogido;
    document.getElementById("emailModificar").value = emailRecogido;
    document.getElementById("dniModificar").value = dniRecogido;
    document.getElementById("edadModificar").value = edadRecogido;

    document.getElementById("ejer2").style.visibility = "visible";



}

function segundaAccion() {
    document.getElementById("nombreF").value = document.getElementById("nombreModificar").value;
    document.getElementById("apellidosF").value = document.getElementById("apellidosModificar").value;
    document.getElementById("emailF").value = document.getElementById("emailModificar").value;
    document.getElementById("dniF").value = document.getElementById("dniModificar").value;
    document.getElementById("edadF").value = document.getElementById("edadModificar").value;

    document.getElementById("ejer3").style.visibility = "visible";
}

function mostrarBOM() {
    var siNoCookies = "";

    if (window.navigator.cookieEnabled == true) {
        siNoCookies = "Si";
    } else {
        siNoCookies = "No";
    }
    var info = "<br><p>Por motivos de seguridad JavaScript no permite mostrar el historial del usuario, en su defecto te muestro si el usuario " +
        "tiene activadas o no las cookies</p>" + "<br><p style=\"font-weight: bold;\">Nombre del navegador:</p> " + navigator.appCodeName +
        "<br><br><p style=\"font-weight: bold;\">Dimensiones de la ventana: </p>" +
        window.screen.width + "x" + screen.height +
        "<br><br><p style=\"font-weight: bold;\">Versión del navegador: </p>" + navigator.appVersion + "<br>" +
        "<br><p style=\"font-weight: bold;\">Cookies activadas: </p>" + siNoCookies;
    var elemento = document.createElement("p");
    elemento.id = "elementoDesdeJs";
    elemento.innerHTML = info;

    if (document.getElementById("elementoDesdeJs") == undefined)
        document.getElementById("ejer3").appendChild(elemento);
}