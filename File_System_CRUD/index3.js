// Desarrollar una aplicación en Node que cree un archivo llamado “Saludo.txt” y tenga como
// contenido el mensaje “Hola Mundo!”. Justo luego de ser creado este archivo con el método
// writeFile, imprime el contenido de este mismo dentro de su callback con el método readFile.

const fs = require('fs');

fs.writeFile('Saludo.txt', 'Hola Mundo!', 'utf-8', () => {
  fs.readFile('Saludo.txt', 'utf-8', (err, data) => {
    console.log(data);
  });
});
