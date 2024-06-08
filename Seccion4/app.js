/* 
Ejercicio 4
Dada una cadena de texto, darle la vuelta e invertir el orden
de sus caracteres, sin usar metodos propios del lenguaje
solo estructuras de control

Ejemplos:
invertir('hola') // devuelve: 'aloh'
invertir('fabian') // devuelve: 'naibaf'
invertir('huertas') // devuelve: 'satreuh'

Como hacerlo:
- function con parametro "cadena"
- crear una variable para guardar la cadena invertida
- bucle que recorra el string y guarde los caracteres en la variable
*/

let palabra = "fabianhuertasweb.co";
function invertir(texto) {
    let invertido = "";

    for(let letra of texto) {
        invertido = letra + invertido;
    }
    return invertido;
}
// Con metodos
/* function invertir(texto) {
    return texto.split("").reverse().join('');
}*/

console.log("texto original: "+palabra+", texto invertido:",invertir(palabra));