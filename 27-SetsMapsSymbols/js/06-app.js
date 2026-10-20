function crearIterador(carrito) {
   //Definimos contador
   let i = 0;

   return {
      siguiente: () => {
         const fin = i <= carrito.length;
         const valor = !fin ? carrito[i++] : undefined;

         return {
            fin,
            valor,
         };
      },
   };
}

const carrito = ["Producto 1", "Producto 2", "Producto 3"];

//Utilizamos iterador
const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente());
