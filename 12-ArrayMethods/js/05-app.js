const carrito = [
   { nombre: "Monitor 27 Pulgadas", precio: 500 },
   { nombre: "Televisión", precio: 100 },
   { nombre: "Tablet", precio: 200 },
   { nombre: "Audifonos", precio: 300 },
   { nombre: "Teclado", precio: 400 },
   { nombre: "Celular", precio: 700 },
];

//con un for Each
let resultado = "";
carrito.forEach((producto, i) => {
   if (producto.nombre === "Tablet") {
      resultado = carrito[i];
   }
});

console.log(resultado);

//con .find

const resultado2 = carrito.find((producto) => {
   return producto.nombre === "Celular";
});

console.log(resultado2);
