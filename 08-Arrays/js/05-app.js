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
   precio: 5000,
};
carrito.push(producto);
carrito.unshift(producto3);
console.log(carrito);
