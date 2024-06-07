/* 
Ejercicio 3: 
dada una palabra, buscarla en una frase y devolver cuantas veces aparece en ella
la frase y la palabra deben ser parametros de una funcion

ejemplos:
- coincidencias("Hola soy una palabra en una frase, PALABRA.", "palabra") // Devuelve: 2
- coincidencias("soy la frase", "victor") // Devuelve: 0

Como hacerlo:
- Funcion con dos argumentos "frase" y "busqueda"
- Poner string en minusculas y limpiarla
- Comprobar si las Busqueda esta incluida en la frase
- Crear un array de palabras de la frase
- Mapear esas palabras y hacer un contador de cada una
- Devolver el contador de la busqueda

*/

function coincidencias(frase, busqueda) {
    
    let textoLimpio = frase.toLowerCase() // Transforma todas las palabras en minuscula
                           .replace(/[!¡.,-]/gi, ''); // quita los caracteres especiales
    let resultado = 0;

    if(textoLimpio.includes(busqueda)) {
        let palabras = textoLimpio.split(" ");
        let mapa = {};

        for(let palabra of palabras) {
            if(mapa[palabra]) {
                mapa[palabra]++;
            }else {
                mapa[palabra] = 1;
            }
        }

        resultado = mapa[busqueda];
    } else { 
        resultado = 0;
    }
    return resultado;
}

console.log("Numero de coincidencias en la frase:",coincidencias("Hola, que tal, soy Fabian Huertas. FABIAN", "fabian")); 