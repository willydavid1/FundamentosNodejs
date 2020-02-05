// file System nos permite trabajar con los archivos de SO, para interactuar con archivos
const fs = require("fs");

// writeFile para crear un nuevo archivo y es asincrono | parametros 1-recibe la ruta 2-el contenido 3-callback funcion que se ejecuta cuando termina el proceso anterior, y se ejecuta cuando termine la accion Recibe el error
fs.writeFile("./texto.txt", "linea uno", function(err) {
  if (err) {
    console.log(err);
  }
  console.log("archivo Creado");
});

// node ejecuta la peticion asincrona, sigue ejecutando muestra es console.log y despues cuando termine de crear el archivo llama al callback
console.log("Ultima linea de codigo");
