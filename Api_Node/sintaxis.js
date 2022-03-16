// SINTAXIS
// https.get(url[, options][, callback])

// ESTRCUTURA DE API NODE
// +++++++++++++++++++++++++++++

// ***Paso 1
// const https = require('https')

// ***Paso 2
// https
// .get(<url>, (resp) => {

// ***Paso 3
// let data = "";
// resp.on("data", (chunk) => {
// data += chunk;
// });
// resp.on("end", () => {
// console.log("Body:", JSON.parse(data));
// });
// })

// ***Paso 4
// .on("error", (err) => {
// console.log("Error: " + err.message);
// });

// Como se puede notar, el primer parámetro es la url que deseamos consultar
// y como segundo parámetro tenemos una función callback con el parámetro “resp”, que contiene un método
// “on” con otros dos parámetros: “data”, que refiere a cuando la data haya llegado con éxito al
// documento, y una función callback que recibe como parámetro la “respuesta” de la url
// consultada.

// Para la captura del error en caso de fracaso, la primera función callback ofrece también un
// método “on” pero en este caso con el evento “error” y otro callback que recibe este error
// ocasionado en la consulta
