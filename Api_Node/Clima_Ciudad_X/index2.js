// +++++++++++++++++++++++++
// +++++++ API NODE ++++++++
// +++++++++++++++++++++++++

//  consulta e imprime por consola todos los climas cuyo
// “Estado” incluye la palabra “Despejado

const https = require('https');

// ● Paso 1: Almacenar en una constante “estado” el string “Despejado”.
const estado = 'Despejado';

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
      // propiedad “Estado” el valor equivalente a la constante estado.

      let miClima = climas.find((c) => c.Estado == estado);
      console.log(miClima);
    });
  })

  .on('error', (err) => {
    console.log('Error: ' + err.message);
  });

// DEVUELVE para esa oportunidad
// +++++++++++++++

// {
//   Codigo: 'SCAR',
//   Estacion: 'Arica',
//   HoraUpdate: '02:00',
//   Temp: '20',
//   Humedad: '78',
//   Estado: 'Despejado',
//   Icono: 'despejadonoche.png'
// }
