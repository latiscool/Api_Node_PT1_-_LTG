// Crear una mini aplicación que devuelva UNA DIVISION de 2 números
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//usando el método slice para recortar el arreglo, omitiendo los primeros 2
//elementos porque no serán usados en este ejercicio.
const argumentos = process.argv.slice(2);

//convertir los datos a tipo Number
let num1 = Number(argumentos[0]);
let num2 = Number(argumentos[1]);

console.log(num1 / num2);
