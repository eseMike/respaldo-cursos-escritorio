const producto = {
   nombre: "Monitor 20 pulgadas",
   precio: 3000,
   disponibilidad: true,
};

// Destructuring
const { nombre } = producto;
console.log(nombre);

//Distructuring con arreglos
const numeros = [10, 20, 30, 40, 50];
const [primero, ...tercero] = numeros;
console.log(tercero);
