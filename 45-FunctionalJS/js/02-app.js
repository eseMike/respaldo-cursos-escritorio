const suma = (a, b) => {
   return a + b;
};

const multiplicar = (a, b) => {
   return a * b;
};

const sumarOMultiplicar = (fn) => fn(10, 20);

console.log(sumarOMultiplicar(multiplicar));
