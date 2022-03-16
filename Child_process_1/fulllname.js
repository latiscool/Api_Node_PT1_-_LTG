//  “suma.js” será nuestra aplicación principal.

// 1. Importar el módulo “child_process” en una constante con el mismo nombre.

const child_process = require('child_process');

// 2.- Crear las variables num1 y num2 de forma global con valores null

let nombre = null;
let apellido = null;

// 3.- función “ejecutar” que reciba como parámetro el nombre de un archivo a ejecutar.
const ejecutar = (archivo) => {
  // 4. La función creada retornará una promesa.
  return new Promise((resolve) => {
    // 5.Usar el método “exec” pasando como primer parámetro una concatenación
    // con el parámetro recibido en la función, y como segundo parámetro el
    // callback “resolve” con el resultado de la ejecución en formato Number. Harás
    // esto para poder sumar aritméticamente ambos resultados.
    child_process.exec(`node ${archivo}`, (err, result) => {
      resolve(String(result));
    });
  });
};

// 6.- Llamar a la función ejecutar pasando como argumento el nombre del primer
// archivo y en el callback de su método “then”, reasignamos el valor de la
// variable “num1” con el parámetro “numero1”, recibido como parámetro por el
// callback “resolve” de la promesa

ejecutar('nombre.js').then((nombre1) => {
  nombre = nombre1;

  // 7.-dentro del método “then” de la primera llamada a la función, vuelve a llamar a
  // la función ejecutar pero esta vez especificando el nombre del segundo
  // archivo reasignando en el callback el valor de “num2” con el parámetro
  // “numero2” e imprimiendo por consola la suma de ambas variables.

  ejecutar('apellido.js').then((apellido1) => {
    apellido = apellido1;
    console.log(nombre + apellido);
  });
});
