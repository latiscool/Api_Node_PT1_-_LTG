// Crear una aplicación en Node que cree, lea, renombre y
// elimine un archivo llamado “shopping.js”, cuyo contenido debe ser una lista de productos a
// comprar en un minimarket, siéntete libre de poner los valores que quieras para este ejercicio
// propuesto.

// Luego del método writeFile, cada método debe estar dentro de la función callback del
// anterior y debe ser ejecutado dentro de un setTimeout con un tiempo de 2 segundos.

const fs = require('fs');

fs.writeFile('shopping.txt', '1.- Arroz, 2.- Jugo, 3.- Tomate', 'utf-8', () => {
  console.log('Archivo Creado');
  setTimeout(() => {
    fs.readFile('shopping.txt', 'utf-8', (err, data) => {
      console.log('Contenido del Archivo : ', data);
      setTimeout(() => {
        fs.rename('shopping.txt', 'compras.txt', () => {
          console.log('Archivo Renombrado');
          setTimeout(() => {
            fs.unlink('compras.txt', () => {
              console.log('Archivo eliminado');
            });
          }, 2000);
        });
      }, 2000);
    });
  }, 2000);
});
