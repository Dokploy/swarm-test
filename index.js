const express = require('express');
const app = express();
const port = 3000;

s
// Generar un identificador único para esta instancia
const instanceId = Math.random().toString(36).substring(7);

// Función para agregar un delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Iniciar con un delay de 5 segundos
(async () => {
  await delay(5000); // Espera 5 segundos

  // Definir las rutas después del delay
  app.get('/', (req, res) => {
    res.send(`Hello from instance ${instanceId}`);
  });

  app.get('/health', (req, res) => {
     res.send(`Hello from instance ${instanceId}`);
  });

  app.listen(port, () => {
    console.log(`App running on port ${port} after 5 seconds delay`);
  });
})();
