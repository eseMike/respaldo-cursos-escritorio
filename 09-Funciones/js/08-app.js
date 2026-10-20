// function sumar(a, b) {
//    return a + b;
// }
// const resultado = sumar(2, 5);
// console.log(resultado);

// Ejemplo 2
let total = 0;

function agregarCarrito(precio) {
   return (total += precio);
}

function calcularImpuesto(total) {
   return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(500);
console.log(total);

const totalPagar = calcularImpuesto(total);
console.log(totalPagar);
