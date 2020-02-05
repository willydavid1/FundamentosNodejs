// importamos el modulo os (predeterminado de node) require es un objeto
const os = require("os");

const calculo = kb => {
  const valorMB = kb * (1 / 1024);
  const valorGB = valorMB * (1 / 1024);
  return valorGB.toFixed(3);
};

console.log(os.platform()); // nos retorna en que sistema operativo estoy corriendo el archivo actual
console.log("Version del SO (sistema operativo): " + os.release()); //nos muestra la version de SO (sistema operativo)
console.log("memoria libre (bytes): " + os.freemem()); //nos muestra la memoria libre
console.log("memoria total (gb): " + calculo(os.totalmem())); //nos muestra la memoria total
