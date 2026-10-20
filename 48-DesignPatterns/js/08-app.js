function Vendedor(nombre) {
   this.nombre = nombre;
   this.sala = null;
}

Vendedor.prototype = {
   oferta: (articulo, precio) => {
      console.log(
         `Tenemos el siguiente artículo ${articulo}, e iniciamos con un precio de ${precio}`
      );
   },

   vendido: (comprador) => {
      console.log(`Vendido a ${comprador}`);
   },
};

function Comprador(nombre) {
   this.nombre = nombre;
   this.sala = null;
}

Comprador.prototype = {
   oferta: (cantidad, comprador) => {
      console.log(`${comprador.nombre} : ${cantidad}`);
   },
};

function Subasta() {
   let compradores = {};

   return {
      registrar: (usuario) => {
         compradores[usuario.nombre] = usuario;
         usuario.sala = this;
      },
   };
}

//Registrar comprador y vendedor en sala
subasta.registrar(jose);
subasta.registrar(miguel);

subasta.registrar(vendedor);

//Crear objetos
const mike = new Comprador("Mike");
const jose = new Comprador("José");

const vendedor = new Vendedor("Vendedor xbox");

const subasta = new Subasta();

vendedor.oferta("Consola Game Cube", 5000);

mike.oferta(5000, mike);
jose.oferta(6000, jose);

vendedor.vendido("José");
