const producto = {
   nombre: "Monitor ",
   precio: 3000,
   disponibilidad: true,
   informacion: {
      pesaje: {
         peso: "1kg",
         medida: "1m",
      },
   },
};

console.log(producto.informacion.pesaje.medida);
