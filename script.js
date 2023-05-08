//VERSIÓN CORREGIDA
function datos() {
    const name = document.getElementById('name-ejemplo').value;

    sessionStorage.setItem("nombre", name);

    window.open("preguntas.html", "_self"); 
}
// Declaración de preguntas
var preguntas = [
    "¿Cuántos eran los estados de ánimos que interactuaban durante la película Intensamente?",
    "¿Cuál es el código para detectar la entrada de un niño al universo de los monstruos en la película Monster Inc.?",
    "¿Dónde transcurre la acción de la película Lilo & Stitch?",
    "¿De qué pelicula es este personaje?",
    "¿Cuál es el nombre del príncipe de La bella durmiente?",
    "¿Cuál de estas frases es icónica de Buzz Lightyear?",
    "¿En qué ruta se pierde el Rayo McQueen?",
    "En la película, ¿quién ordena raptar a Hércules del Monte Olimpo?"
];

// Declaración de opciones, cada elemento de la lista (que a su vez es una lista)
// corresponde a las posibles respuestas de una pregunta.
// Se mantiene el orden de la lista de preguntas.
var opciones = [
    ["Furia, Tristeza, Desagrado y Temor",
    "Furia, Tristeza, Desagrado, Temor y Alegría",
    "Furia, Tristeza, Desagrado, Temor, Alegría y Enamoramiento.",
    "Desagrado, Temor, Alegría y Enamoramiento"],
    ["9-11",
    "15-66",
    "4-15",
    "33-12"],
    ["Brasil",
    "Canadá",
    "Hawai",
    "México"],
    ["Bolt",
    "Wall-e",
    "Zootopia",
    "Ralph, el Demoledor"],
    ["Erick",
    "Flynn",
    "Felipe",
    "Louis"],
    ["¡Eres un juguete!",
    "¡Al infinito y mas allá!",
    "¡Nosotros los juguetes lo podemos ver todo!",
    "¡Nos has salvado. Estamos agradecidos!"],
    ["Ruta 45",
    "Ruta 55",
    "Ruta 66",
    "Ruta 33"],
    ["Hades",
    "Hérmes",
    "Hefesto",
    "Herco"]
    ]

var puntajePorOpcion = [
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 0]
  //27 22 17 12 10
  //22 22 14 11 10   
]

var dato_curioso = [
    "La película muestra las 5 emociones que consideran más básicas: la alegría, la tristeza, \n la ira, el miedo y el asco. Según la psicología, éstas emociones principales se mezclan a \n lo largo de nuestra vida creando nuevos estados emocionales.",
    "Cada una de las serpientes de Celia tiene nombre: Amelia, Bobelia, Ophelia, Cordelia y Madge.",
    "¿Que nos enseña Lilo y Stitch? La relación de esta niña y su mascota nos enseña lo importante de \n aceptar a los otros, y entender que las personas no se pueden cambiar, pero si nos esforzamos,\n los comportamientos sí pueden cambiarse en la medida de lo posible. ",
    "La película Zootopia nos permite reflexionar sobre la sociedad actual, en la que los estereotipos \n forman parte esencial del trato humano, y sobre cómo por medio de una actitud positiva,\n esfuerzo y compromiso se pueden vencer muchas adversidades para salir adelante.",
    "Es el primer príncipe Disney en tener un nombre propio y también es conocido como el príncipe Disney rubio.",
    "Toy Story' fue el primer largometraje de Pixar y la primera película animada creada por ordenador.",
    " Radiador Springs (en la versión original en inglés es Radiator Springs) es el nombre del pueblo \n ficticio donde se ambienta la película animada Cars. El pueblo está situado en la ruta 66,\n en el condado Carburador.",
    " En la mitología griega, Hades (el 'invisible'), el dios del inframundo, era uno de los hijos de \n los Titanes Cronos y Rea. Tenía tres hermanas, Deméter, Hestia y Hera, así como dos hermanos, \n Zeus (el menor de todos) y Poseidón. Juntos constituían los seis dioses olímpicos originales."
];

var imgPorPreg = [
    "https://www.youloveit.ru/uploads/posts/2015-06/1434809098_youloveit_ru_multfilm_golovolomka_emocii_raily10.gif",
    "https://media.giphy.com/media/xT4AplQ21okJsnUc1y/giphy.gif",
    "https://media.giphy.com/media/PGMqSJcVexVEQ/giphy.gif",
    "https://i.pinimg.com/originals/f6/ff/8e/f6ff8e412e78335a9d32c516cc307d00.gif",
    "https://64.media.tumblr.com/de02c7b1a2e57373d44e6ae733635583/tumblr_n5ip6wdmik1ste05mo1_r1_500.gifv",
    "https://media.tenor.com/DyYVK7EjVeYAAAAC/buzzl-toystory.gif",
    "https://media.tenor.com/O4O3dw4WD-wAAAAC/cars-lightning-mcqueen.gif",
    "https://i.giphy.com/media/QtqjZtkLNuRPi/giphy.webp"

]
//"zootopia.jpg", 
// Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

// Despliegue de los resultados
function mostrarResultado() {
    // Se remueven los hijos del div con clase "card", dentro de él agregaremos los resultados
    var div = document.getElementsByClassName("card")[0];
    var nombre = sessionStorage.getItem("nombre");
    div.innerHTML = "";

    // Se actualiza la barra de progreso
    document.getElementById("barra-progreso").value = i * 100 / (preguntas.length - 1);

    
    
    // Agregamos los elementos correspondientes a los resultados
    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";
    div.innerHTML += `<p class='resultado_obtenido'>${nombre}, Has obtenido ${puntaje} puntos`;

    

    
}

// Actualiza el puntaje acumulado según la opción seleccionada y avanza a la siguiente pregunta o muestra los resultados
function actualizarPuntaje(opcion) {
    // Calcula el índice de la opción seleccionada
    var indice = opcion - 1;
    // Incrementa el puntaje acumulado con el valor correspondiente a la opción seleccionada
    puntaje += puntajePorOpcion[i][indice];
// Incrementa el índice de la pregunta actual
    i++
    // Si aún quedan preguntas por responder, muestra la siguiente pregunta
    if (i < preguntas.length) {
      
        siguientePregunta();
    } else { // Si no quedan preguntas, muestra los resultados
        mostrarResultado();
    }
}

// Muestra la siguiente pregunta y sus opciones
function siguientePregunta() {
    document.getElementById("pregunta").innerHTML = preguntas[i];
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    document.getElementById("Ayudita").src = imgPorPreg[i];
  
    
    document.getElementById("barra-progreso").value = i * 100 / preguntas.length;
    
}

siguientePregunta();  // Muestra la primera pregunta
// Agrega "event listeners" a los elementos de las opciones para detectar cuando el usuario selecciona una opción
// y actualizar el puntaje y avanzar a la siguiente pregunta según la opción seleccionada
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);
});


