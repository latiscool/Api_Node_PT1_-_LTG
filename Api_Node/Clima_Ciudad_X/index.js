// +++++++++++++++++++++++++
// +++++++ API NODE ++++++++
// +++++++++++++++++++++++++

// ¿Cuál es el clima de mi ciudad?, donde se solicita desarrollar una
// aplicación en Node que consulte el clima de Concepción o Iquique.

const https = require('https');

// ● Paso 1: Almacenar en una constante “ciudad” el string “Concepción”.
const ciudad = 'Iquique';

const urlBase = 'https://api.gael.cloud/general/public/clima';

https
  .get(urlBase, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      // ● Paso 2: Almacenar en una variable la data obtenida de la consulta en formato JSON.
      let climas = JSON.parse(data);

      // ● Paso 3: Usar un simple método “find” encuentra el objeto que contiene en su
      // propiedad “Estacion” el valor equivalente a la constante ciudad.

      let miClima = climas.find((c) => c.Estacion == ciudad);
      console.log(miClima);
    });
  })

  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });

// DEVUELVE
// +++++++++++++++

// {
//   Codigo: 'SCDA',
//   Estacion: 'Iquique',
//   HoraUpdate: '02:00',
//   Temp: '19',
//   Humedad: '78',
//   Estado: 'Despejado',
//   Icono: 'despejadonoche.png'
// }
