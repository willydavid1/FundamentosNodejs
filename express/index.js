// importamos express framework para crear servidores y colors
const express = require("express");
const colors = require("colors");

// inicializa el servidor
const server = express();

// cuando al servidor le pidan algo a la ruta / vamos a responder algo en un callback y recibe por parametro una peticion y una respuesta
server.get("/", (req, res) => {
  res.send("<h1>Hola Mundo con Express y Node</h1>");
  res.end();
});

// le decimos al server que escuche en el puerto 2800 y cuando escuche en ese puerto ejecuta el callback
server.listen(2800, () => {
  console.log("Servidor en el puerto 2800".green);
});
