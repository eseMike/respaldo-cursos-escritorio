const obtenerCliente = () => {
   const nombre = "Mike";

   function muestraNombre() {
      console.log(nombre);
   }
   return muestraNombre;
};

const cliente = obtenerCliente();
cliente();
