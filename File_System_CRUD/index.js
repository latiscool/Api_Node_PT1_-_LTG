// ¿Qué tareas tengo pendientes?
// Se solicita desarrollar una aplicación en Node que cree, devuelva el
// contenido, renombre y elimine un archivo con las tareas pendientes descritas por el usuario.
// Crea un archivo “index.js” y sigue los siguiente pasos:

// ● Paso 1: Importar el módulo “fs” en una constante.
const fs = require('fs');

// ● Paso 2: Usar el método writeFile del módulo “fs” para crear un archivo de nombre
// “tareas.txt” con una tarea especificando que la codificación será en código utf8 e
// imprimiendo en pantalla un mensaje de éxito.

fs.writeFile('tareas.txt', '1) Hacer aseo en la casa', 'utf-8', () => {
  console.log('Archivo Creado con Exito');
});
