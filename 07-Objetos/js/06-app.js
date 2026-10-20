const producto = {
   nombre: "Monitor 20 pulgadas",
   precio: 3000,
   disponibilidad: true,
   informacion: {
      pesaje: {
         peso: "1kg",
         medida: "1m",
      },
   },
};

const {
   informacion: {
      pesaje: { peso },
   },
} = producto;
console.log(peso);
