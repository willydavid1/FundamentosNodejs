// importamos el modulo http y este modulo me permite crear un servidor web
const http = require("http");

// IMPORTO un nuevo modulo que descargamos de npm y lo guardo en const
const colors = require("colors");

// callback
const handleServer = (req, res) => {
  // voy a escribir una cabecera para darle mas info al navegador, parametros 1ero codigo de estado HTTP (200 o 404) 2do un objeto con el typo de contenido (HTML) o texto plano
  res.writeHead(200, { "Content-type": "text/html" });

  // vamos a responder un h1 cada vez que entren al sitio web y termina la respuesta, va a seguir recibiendo peticiones de otros usuarios
  res.write("<h1> Hola mundo </h1>");
  res.end();
};

// createServer me retorna un objeto | cuando termines de crear este servidor ejecuta el callback, recibe por parametro la peticion (request | req) y la respuesta del server (response | res) | cuando el servidor ya este inicializado, le decimos en que puerto va a escuchar mi servidor y cuando escuche muestre por consola un mensaje
const server = http.createServer(handleServer);
server.listen(2800, () => {
  console.log("Servidor en el puerto 2800".green);
});
