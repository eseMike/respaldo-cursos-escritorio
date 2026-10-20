const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];

const carrito = [
   { nombre: "Monitor de 20 pulgadas", precio: 400 },
   { nombre: "Radio", precio: 300 },
   { nombre: "Ipad", precio: 800 },
   { nombre: "Cuaderno", precio: 400 },
   { nombre: "Celular", precio: 1000 },
   { nombre: "Audífonos", precio: 500 },
];

for (const pendiente of pendientes) {
   console.log(pendiente);
}

for (const car of carrito) {
   console.log(car.precio);
}
