// ¿Qué tareas tengo pendientes?

// Se intentera agregar otra tarea al archivo, para esto se debe obtener su contenido y
// simplemente concatenarle otra tarea como un String, básicamente se estaría
// sobrescribiendo su contenido

// ● Paso 0: Importar el módulo “fs” en una constante.
const fs = require('fs');

// ● Paso 1: Ejecutar el método readFile declarando el nombre del archivo tareas.txt y la
// codificación utf8.
fs.readFile('tareas.txt', 'utf-8', (err, data) => {
  fs.writeFile('tareas.txt', data + ' 2) Cocinar para mañana', 'utf-8', () => {
    console.log('Se agregado Otra Tarea,(Sobrescribiendo el archivo)');
  });

  // ● Paso 2: Usar el método writeFile del módulo “fs” para crear un archivo de nombre
  // “tareas.txt” con una tarea especificando que la codificación será en código utf8 e
  // imprimiendo en pantalla un mensaje de éxito.
});
