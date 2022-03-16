// +++++++++++++++++++++++++
// +++++++ API NODE ++++++++
// +++++++++++++++++++++++++

// // Utilizar la siguiente API para consultar el clima de las ciudades más representativas de Chile,
// para eso debemos usar el siguiente endpoint: https://api.gael.cloud/general/public/clima
// Aplicando el módulo https sigue los siguientes pasos:

// ● Paso 1: Importar el módulo https.
const https = require('https');

// ● Paso 2: Usar el método get del módulo https para consultar la API.
const urlBase = 'https://api.gael.cloud/general/public/clima';

https
  .get(urlBase, (resp) => {
    // ● Paso 3: Usar el método “on” del parámetro recibido en el callback del método get
    // especificando el evento “data” e imprimiendo la data obtenida de la API formateada a
    // JSON.
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      console.log('Body:', JSON.parse(data));
    });
  })

  // ● Paso 4: Usar el método “on” del callback del método get especificando el evento
  // “error” para imprimir por consola en su callback el posible error generado por la
  // consulta.

  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });
