"use strict";

const producto = {
   nombre: "Monitor",
   precio: 1000,
   disponibilidad: true,
};

Object.seal(producto);
producto.disponibilidad = false;

console.log(producto);
