/* 
Ejericio 2:
Dada una cadena de texto, comprobar si es un palindromo o no
palindromo = son palabras que leen igual aunque esten invertidas
por ejmplo (otto, ana, bob, allivesevilla)

No tener encuenta espacios o caracteres especiales.
Ejemplo:
ejecutar  la funcion
- palindromo("otto") // devuelve: true
- palindromo("camilo") // devuelve: false

Como hacerlo:
- funcion con parametro "texto"
- separar el texto en un array de letras
- darle la vuelta
- unir el array en un string y comparar el parametro

*/

function palindromo(texto) {
    let invertido = texto
                        .split('') // Separa todas las letras
                        .reverse() // Las invierte
                        .join('') // Vuelve a unir las letras
                        ;
    return (invertido === texto);                 
}

let palabra = "ana"
console.log("¿Es "+palabra+" un palindormo ? " + palindromo(palabra)); 