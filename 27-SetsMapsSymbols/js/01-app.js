const carrito = new Set();
carrito.add("Camisa");
carrito.add("Disco 1");
carrito.add("test3");

carrito.forEach((producto) => {
   console.log(producto);
});

//elimina un elemento
carrito.delete("test3");

console.log(carrito);

//nos dice el tamaño del Set
console.log(carrito.size);

//Nos dice si existe un elemento
console.log(carrito.has("Camisa"));

//Vaciamos todos los elementos
carrito.clear();

// Eliminar duplicados
const numeros = [10, 11, 2, 11, 2, 4, 5, 2, 3, 5];
const numeroSet = new Set(numeros);
console.log(numeroSet);
