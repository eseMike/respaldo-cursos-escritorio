const producto = {
   nombre: "Monitor ",
   precio: 3000,
   disponibilidad: true,
};

//Agregar nuevas propiedades al objeto
producto.tamanio = "Grande";

// eliminar propiedades del objeto
delete producto.disponibilidad;
console.log(producto);
