//For each

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];
pendientes.forEach((pendiente, indice) => {
   console.log(`${indice}: ${pendiente}`);
});

const carrito = [
   { nombre: "Monitor de 20 pulgadas", precio: 400 },
   { nombre: "Radio", precio: 300 },
   { nombre: "Ipad", precio: 800 },
   { nombre: "Cuaderno", precio: 400 },
   { nombre: "Celular", precio: 1000 },
   { nombre: "Audífonos", precio: 500 },
];

const nuevoArreglo = carrito.forEach((objetos) => objetos);

const nuevoArreglo2 = carrito.map((objetos) => objetos.nombre);

console.log(nuevoArreglo);

console.log(nuevoArreglo2);
