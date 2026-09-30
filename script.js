const abrirBtn = document.getElementById("abrirBtn");
const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");
const sobre = document.getElementById("sobre");
const corazones = document.getElementById("corazones");


// ======================================
// ABRIR CARTA
// ======================================

abrirBtn.addEventListener("click", () => {

    // Animación de apertura
    sobre.classList.add("abriendo");

    const tapa = document.querySelector(".tapa");

    tapa.style.transform = "rotateX(180deg)";

    setTimeout(() => {

        inicio.style.opacity = "0";

    }, 700);


    setTimeout(() => {

        inicio.style.display = "none";

        regalo.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

});


// ======================================
// CREAR CORAZONES
// ======================================

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon-flotante");

    corazon.innerHTML = "💙";

    corazon.style.left =
        Math.random() * 100 + "%";

    corazon.style.fontSize =
        (12 + Math.random() * 22) + "px";

    corazon.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    corazon.style.animationDelay =
        Math.random() * 3 + "s";

    corazones.appendChild(corazon);


    setTimeout(() => {

        corazon.remove();

    }, 13000);

}


// Crear corazones constantemente

setInterval(crearCorazon, 450);


// Crear algunos inicialmente

for (let i = 0; i < 15; i++) {

    setTimeout(
        crearCorazon,
        i * 300
    );

}