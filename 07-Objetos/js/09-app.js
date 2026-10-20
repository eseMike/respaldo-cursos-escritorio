const producto = {
   nombre: "Monitor",
   precio: 1000,
   disponibilidad: true,
};

const medidas = {
   peso: "1kg",
   medida: "1metro",
};

console.log(producto);
console.log(medidas);

const resultado = { ...producto, ...medidas };
console.log(resultado);
