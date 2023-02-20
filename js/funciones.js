/**
 * En este archivo se coloca las funciones que se reflejan cuando el usuario interactua en
 * el documento.
 */
let elementos = document.querySelectorAll(".animacion");
let menu  = document.getElementById("menu");
let posicion = menu.offsetTop;

function MostrarElementosHiden() {
    // Guardo el tope de la pantalla en una variable.
    let ScrollTope = document.documentElement.scrollTop;
    // Uso un bucle para revisar la posicion con respecto al tope de cada elemento consultado
    for (var n = 0; n < elementos.length; n++) {
        let PosicionElemento = elementos[n].offsetTop;
        if(PosicionElemento -500 < ScrollTope) {
            elementos[n].style.opacity = 1;
            elementos[n].classList.add("efectoArriba");
        }
    }
}
function AnclarElemento() {
    if(window.pageYOffset > posicion ) {
        menu.classList.add("anclar");
    } else {
        menu.classList.remove("anclar");
    }
}

window.addEventListener("scroll",MostrarElementosHiden);
window.addEventListener("scroll",AnclarElemento);