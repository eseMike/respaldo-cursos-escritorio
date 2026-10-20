const carrito = [
   { nombre: "Monitor de 20 pulgadas", precio: 400 },
   { nombre: "Radio", precio: 300 },
   { nombre: "Ipad", precio: 800 },
   { nombre: "Cuaderno", precio: 40 },
   { nombre: "Celular", precio: 100 },
];

carrito.map(function (producto) {
   console.log(producto.nombre, producto.precio);
});
