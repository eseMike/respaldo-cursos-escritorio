"use strict";

const producto = {
   nombre: "Monitor",
   precio: 1000,
   disponibilidad: true,
};

Object.freeze(producto);

console.log(Object.isFrozen(producto));
