// creamos un objeto
const Math = {};

const sumar = (x1, x2) => {
  return x1 + x2;
};

const restar = (x1, x2) => {
  return x1 - x2;
};

const multiplicar = (x1, x2) => {
  return x1 * x2;
};

const dividir = (x1, x2) => {
  // si se divide entre 0, no se puede caso contrario ejecuta la division
  if (x2 == 0) {
    console.log("no se puede dividir por 0");
  } else {
    return x1 / x2;
  }
};

// le agrego las propiedades al objeto
Math.sumar = sumar;
Math.restar = restar;
Math.dividir = dividir;
Math.multiplicar = multiplicar;

const hello = (parametro) => {
  return "hola " + parametro;
};

// exporta el objeto Math o una funcion
module.exports = Math;

// exportamos se define con la palabra exports.NOMBRE y cuando se llame desde otro archivo el nombre sumar que utilize la funcion sumar desde otro archivo
// exports.sumar = sumar;
// exports.restar = restar;
// exports.multiplicar = multiplicar;
// exports.dividir = dividir;
