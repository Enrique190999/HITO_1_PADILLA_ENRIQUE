//document.getElementById("formBsq").addEventListener("submit",funcionBuscador);

function funcionBuscador() {
    if (document.getElementById("txtBuscador_").value.toLowerCase().replace(" ", "").includes("ejercicio 1") || document.getElementById("txtBuscador_").value.toLowerCase().replace(" ", "").includes("ejercicio1")) {

        window.location = "Ejercicio_1\\index.html";
    } else if ((document.getElementById("txtBuscador_").value.toLowerCase().replace(" ", "").includes("ejercicio 2") || document.getElementById("txtBuscador_").value.toLowerCase().replace(" ", "").includes("ejercicio2"))) {
        window.location = "Ejercicio_2\\index.html";
    } else if ((document.getElementById("txtBuscador_").value.toLowerCase().replace(" ", "").includes("ejercicio 3") || document.getElementById("txtBuscador_").value.toLowerCase().replace(" ", "").includes("ejercicio4"))) {
        window.location = "Ejercicio_3\\index.html";
    } else if ((document.getElementById("txtBuscador_").value.toLowerCase().replace(" ", "").includes("acercade") || document.getElementById("txtBuscador_").value.toLowerCase().replace(" ", "").includes("acerca de"))) {
        document.getElementById("cargarFrame").setAttribute("src", "\\resources\\iframe_acerca.html");
    } else {

        document.getElementById("cargarFrame").setAttribute("src", "\\resources\\iframe_404error.html");
    }
}

function cargarFramesEjercicios(e) {
    if (e.id != "navItem") {

        document.getElementById("cargarFrame").setAttribute("src", "\\" + e.id + "\\index.html");

    } else
        document.getElementById("cargarFrame").setAttribute("src", "\\resources\\iframe_acerca.html");
}