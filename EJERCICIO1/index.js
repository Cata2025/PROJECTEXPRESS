// Importar el módulo de Express
const express = require('express');

// Crear una instancia de la aplicación Express
const app = express();

// Definir el puerto en que el servidor va a escuchar
const puerto = 8000;  // Cambiar a 8000

// Definir una ruta para la página de inicio
app.get('/', (req, res) => {
    res.send('Servidor levantado en el puerto 8000'); // Responder con el mensaje correcto
});

// Levantar el servidor
app.listen(puerto, () => {
    console.log(`Servidor levantado en el puerto ${puerto}`);
});





