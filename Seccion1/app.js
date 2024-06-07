/*
Ejercicio 1:
Dado un numero, devolver su tabla de multiplicar completa.

Ejemplo:
- Ejecuta esta funcion
tablaMultiplicar(5)

-Me devuelve este resultado:

    tabla del 5
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
como hacerlo:
- funcion con parametro "numero"
- variable con texto encabezado
- bucle del 1 al 10
- concatenar a la variable string con multiplicacion y su resultado
*/

function tablaMultipiclar(numero) {
     // let resultado = "# Tabla del "+numero+" #";
     let resultado = `# Tabla del ${numero} # \n`;

    for (let i = 1; i <= 10; i++) {
        let multiplicacion = (i * numero);
        
        resultado += `${i} x ${numero} = ${multiplicacion} \n`;
    }

    return resultado;
}

console.log(tablaMultipiclar(5));