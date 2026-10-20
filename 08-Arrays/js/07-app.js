const carrito = [];

// Definir producto
const producto = {
   nombre: "monitor 13",
   precio: 1500,
};

const producto2 = {
   nombre: "Celular",
   precio: 3000,
};

const producto3 = {
   nombre: "teclado",
   precio: 500,
};

const producto4 = {
   nombre: "Bocina",
   precio: 8000,
};

carrito.push(producto);
carrito.push(producto2);
carrito.unshift(producto3);

// Eliminar de la tabla
// carrito.pop();
// console.table(carrito);

// carrito.shift();
// console.table(carrito);

// eliminar elementos de en medio

carrito.splice(1, 1);
console.table(carrito);
