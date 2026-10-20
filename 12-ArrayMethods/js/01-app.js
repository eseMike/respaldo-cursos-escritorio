const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const carrito = [
   { nombre: "Monitor 27 Pulgadas", precio: 500 },
   { nombre: "Televisión", precio: 100 },
   { nombre: "Tablet", precio: 200 },
   { nombre: "Audifonos", precio: 300 },
   { nombre: "Teclado", precio: 400 },
   { nombre: "Celular", precio: 700 },
];

//Comprobar si un valor existe en un arreglo
meses.forEach((mes) => {
   if (mes === "Enero") {
      console.log(`${mes} si existe`);
   }
});

// Includes nos funciona unicamente en elementos de arreglos con indices
const resultado = meses.includes("Diciembre");
console.log(resultado);

// Some nos funciona para un arreglo de objetos
const existe = carrito.some((producto) => {
   return producto.nombre === "Celular";
});

console.log(existe);

const existe2 = meses.some((mes) => {
   return mes === "Mayo";
});

console.log(existe2);
