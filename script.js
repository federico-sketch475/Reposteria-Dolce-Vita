/* ================= CAMBIO DE IDIOMA ================= */

let idiomaActual = "es";

function cambiarIdioma() {

    const textosEspanol = document.querySelectorAll(".es");
    const textosItaliano = document.querySelectorAll(".it");
    const boton = document.getElementById("idiomaBtn");

    if (idiomaActual === "es") {

        textosEspanol.forEach(function(texto) {
            texto.style.display = "none";
        });

        textosItaliano.forEach(function(texto) {
            texto.style.display = "";
        });

        boton.innerHTML = "🇪🇸 Español";

        idiomaActual = "it";

        document.documentElement.lang = "it";

    } else {

        textosItaliano.forEach(function(texto) {
            texto.style.display = "none";
        });

        textosEspanol.forEach(function(texto) {
            texto.style.display = "";
        });

        boton.innerHTML = "🇮🇹 Italiano";

        idiomaActual = "es";

        document.documentElement.lang = "es";
    }
}


/* ================= ANIMACIONES AL HACER SCROLL ================= */

const elementos = document.querySelectorAll(
    ".seccion, .presentacion, .horarios, .contacto-contenido"
);

function revisarAnimaciones() {

    elementos.forEach(function(elemento) {

        const posicion = elemento.getBoundingClientRect().top;

        const alturaPantalla = window.innerHeight;

        if (posicion < alturaPantalla - 100) {

            elemento.classList.add("visible");

        }

    });
}

window.addEventListener("scroll", revisarAnimaciones);

revisarAnimaciones();


/* ================= FORMULARIO ================= */

const formulario = document.getElementById("contactForm");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    let mensaje;

    if (idiomaActual === "es") {

        mensaje =
            "¡Gracias por contactarte con Dolce Vita! 🍰\n\n" +
            "Tu mensaje fue recibido correctamente.";

    } else {

        mensaje =
            "Grazie per aver contattato Dolce Vita! 🍰\n\n" +
            "Il tuo messaggio è stato ricevuto correttamente.";

    }

    alert(mensaje);

    formulario.reset();

});


/* ================= EFECTO DEL HEADER ================= */

window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(60, 35, 20, 0.10)";

    } else {

        header.style.boxShadow = "none";

    }

});
