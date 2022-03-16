// Capturando argumentos por la línea de comandos
// ++++++++++++++++++++++++++++++++++++++++++++++

console.log(process.argv);
// recibido un arreglo con 2 elementos tipo String
// que reflejan la dirección del recurso que se está ocupando en el argumento
// y la ubicacion del archivo index.js

// $ node index.js
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'H:\\EJER\\index.js'
// ]

// OPCION 2, agregado "Desafio Latam"
// *******************************

// $ node index.js Desafio Latam
//Devuelve 4 elementos de tipo String, dentro de un arreglo.
//siendo los últimos 2 el argumento textualmente escrito como texto.

// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'H:\\EJER\\index.js',
//   'Desafio',
//   'Latam'
// ]
