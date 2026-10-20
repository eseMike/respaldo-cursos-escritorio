const carrito = [
   { nombre: "Monitor 27 Pulgadas", precio: 500 },
   { nombre: "Televisión", precio: 100 },
   { nombre: "Tablet", precio: 200 },
   { nombre: "Audifonos", precio: 300 },
   { nombre: "Teclado", precio: 400 },
   { nombre: "Celular", precio: 700 },
];

// Ejemplo for each
let total = 0;

carrito.forEach((producto) => {
   return (total += producto.precio);
});

console.log(total);

// Sumar total del carrito con un for each
let resultado = carrito.reduce((total, producto) => {
   return total + producto.precio;
}, 0);

console.log(resultado);
// Sumar total del carrito con reduce
