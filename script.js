// Cambio de idioma Español <-> Italiano

let idioma = "es";

function cambiarIdioma(){

    const espanol = document.querySelectorAll(".es");
    const italiano = document.querySelectorAll(".it");
    const boton = document.querySelector("button");

    if(idioma === "es"){

        espanol.forEach(texto =>{
            texto.style.display = "none";
        });

        italiano.forEach(texto =>{
            texto.style.display = "block";
        });

        boton.innerHTML = "Passa allo spagnolo";

        idioma = "it";

    }else{

        espanol.forEach(texto =>{
            texto.style.display = "block";
        });

        italiano.forEach(texto =>{
            texto.style.display = "none";
        });

        boton.innerHTML = "Cambiar idioma";

        idioma = "es";
    }

}


// Animación al hacer scroll

const elementos = document.querySelectorAll("section");

function mostrarElementos(){

    elementos.forEach(elemento=>{

        const posicion = elemento.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if(posicion < pantalla - 100){

            elemento.style.opacity = "1";
            elemento.style.transform = "translateY(0px)";

        }

    });

}

elementos.forEach(elemento=>{

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "1s";

});

window.addEventListener("scroll",mostrarElementos);

mostrarElementos();


// Mensaje al enviar el formulario

const formulario = document.querySelector("form");

formulario.addEventListener("submit",function(){

    alert("¡Gracias por tu pedido! / Grazie per il tuo ordine!");

});
