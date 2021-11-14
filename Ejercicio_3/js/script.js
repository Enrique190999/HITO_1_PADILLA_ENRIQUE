function crearCookie(event) {
    var nombreCo, valorCo;
    event.preventDefault();
    nombreCo = document.getElementById("nombreCookie").value.replaceAll(" ", "");
    valorCo = document.getElementById("valorCookie").value.replaceAll(" ", "");
    if (nombreCo != "" && valorCo != "") {
        if (document.getElementById("tipoCookie").value == "localStorage") {
            localStorage.setItem(nombreCo, valorCo);
        } else if (document.getElementById("tipoCookie").value == "sesionStorage") {

            sessionStorage.setItem(nombreCo, valorCo);
        } else {

            document.cookie = nombreCo + "=" + valorCo + ";";
        }
    }
}


function cargarCookies() {
    var textLs = "";
    var textSs = "";
    document.getElementById("textCookies").innerHTML = document.cookie.replaceAll(";", "\n");

    for (let index = 0; index < localStorage.length; index++) {

        textLs += (localStorage.key(index) + "=" + localStorage.getItem(localStorage.key(index)) + "\n");

    }
    document.getElementById("textLS").innerHTML = textLs

    for (let index = 0; index < sessionStorage.length; index++) {

        textSs += (sessionStorage.key(index) + "=" + sessionStorage.getItem(sessionStorage.key(index)) + "\n");

    }

    document.getElementById("textSS").innerHTML = textSs;
}