const pInicial = pInicial = document.getElementById("pInicial");

//cuando de un click va a hacer un evento
pInicial.onclick = function(){
    accion()
}

function cambiaColorAleatorio(){
    const colores = [
        "red",
        "blue",
        "black",
        "cyan"
    ]

    // console.log(colores[Math.floor(Math.random() * colores.length)])
    pInicial.style.color = colores[Math.floor(Math.random() * colores.length)];

}
/* 
TIPOS DE DATOS

var -> Modificarse, scope global - ya no se recomineda a menos que sea una var global

let -> Modificable, scope limitado - RECOMENDADA (da mas espacio de memoria)

const -> CONSTANTE, no modificlabe, scope global
*/

/* 
CASES

PascalCase -> nombres de Clases - JAVA

camelCase -> variables, funciones, atributos -  JS
    - varible -> pInicial = 
    - funcion -> pInicial()
    - atributo -> pInicial

sake_case -> Python, Js
    variables y funciones

CASE - constantes (recomendado)

*/


