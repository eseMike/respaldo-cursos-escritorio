const aplicarDescuento = new Promise((resolve, reject) => {
   const descuento = true;

   if (descuento) {
      resolve("Descuento aplicado");
   } else {
      reject("Descuento no aplicado");
   }
});

aplicarDescuento
   .then((resultado) => {
      descuento(resultado);
   })
   .catch((error) => {
      console.log(error);
   });

function descuento(mensaje) {
   console.log(mensaje);
}

//3 valores posibles
//fulfilled - el promise se cumplió
//rejecte - el promise no se cumplió
//pending - no se ha cumplido ni ha sido rechazado
