const express = require('express');
const app = express();
const port = 3000;
// Generar un identificador único para esta instancia
const instanceId = Math.random().toString(36).substring(7);
// Función para agregar un delay
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// Iniciar con un delay d
(async () => {
  const startupDelayMs = process.env.STARTUP_DELAY ?? 5000;
  await delay(startupDelayMs); // Espera 5 segundos

  // Definir las rutas después del delay
  app.get('/', (req, res) => {
    res.send(`Hello from instance ${instanceId}`);
  });

  app.get('/health', (req, res) => {
     res.send(`Hello from instance ${instanceId}`);
  });

  app.listen(port, () => {
    console.log(`App running on port ${port} after ${startupDelayMs}ms delay`);
  });
})();
