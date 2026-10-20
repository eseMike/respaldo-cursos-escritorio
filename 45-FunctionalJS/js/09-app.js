const suma = (a, b, c) => a + b + c;

const parcial = (a) => (b, c) => suma(a, b, c);

const primerNumero = parcial(5);
const resultado = primerNumero(3, 5);

console.log(suma(1, 2, 3));
console.log(resultado);

const parcial2 = (a) => (b) => (c) => suma(a, b, c);

// const firstNumber = parcial2(2);
// const secondNumber = firstNumber(4);
// const result = secondNumber(10);
// console.log(result);

const resultadoParcial = parcial2(1)(10)(1);
console.log(resultadoParcial);
