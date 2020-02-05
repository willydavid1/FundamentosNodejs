// requiero este archivo y para usar las funciones almacenamos todo ese modulo dentro de una const y accedemos a los metodos que tenga el modulo por la nomenclatura del punto | require retorna un objeto
const matematica = require("./matematica.js");

console.log(matematica.sumar(1, 2));

// para usar funciones de otro modulo:
// console.log(matematica.sumar(1, 0));
// console.log(matematica.restar(2, 1));
// console.log(matematica.multiplicar(1, 0));
// console.log(matematica.dividir(1, 0));
// console.log(matematica.dividir(2, 1));
