// Ahora si quisiéramos renombrar o eliminar el archivo tareas.txt debemos usar los métodos
// rename y unlink, no obstante te recomiendo comentar o eliminar el código escrito hasta
// ahora, exceptuando la importación del módulo “fs”, porque de ser ejecutado de nuevo
// sobrescribirá el contenido con una repetición de la segunda tarea, no obstante no es de
// suma importancia pues al final será eliminado.

// Para realizar el renombrado y eliminación realiza los siguientes pasos:

// ● Paso 1: Renombrar el archivo tareas.txt por tasks.txt e imprime por consola un
// mensaje de éxito.

const fs = require('fs');

fs.rename('tareasCopy.txt', 'task.txt', () => {
  console.log('Archivo Renombrado');

  // ● Paso 2: Dentro del callback del método rename, elimina el archivo recién renombrado
  // como tasks.txt e imprime por consola un mensaje de éxito.
  fs.unlink('task.txt', () => {
    console.log('Archivo Eliminado');
  });
});
