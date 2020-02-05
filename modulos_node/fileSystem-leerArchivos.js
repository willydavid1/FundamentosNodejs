// file System nos permite trabajar con los archivos de SO, para interactuar con archivos
const fs = require("fs");

// Para leer archivos con readFile y es asincrono | parametros 1-el archivo a leer 2-cuando termine la operacion asincrona ejecutara este callback (recibe un error o los datos que estan dentro de este archivo en formato crudo) hay que pasarlo a string
fs.readFile("./texto.txt", (err, data) => {
  // si hay un error muestralo
  if (err) {
    console.log(err);
  }

  // mostramos la info que esta en el archivo
  console.log(data.toString());
});