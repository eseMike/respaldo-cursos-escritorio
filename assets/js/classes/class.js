class Persona {
   static _conteo = 0;

   static get conteo() {
      return Persona._conteo + " Instancias";
   }

   static mensaje() {
      console.log(this.nombre); //Undefined
      console.log("Hola a todos soy un método estático");
   }

   nombre = "";
   nombreClave = "";
   frase = "";
   comida = "";
   constructor(
      nombre = "Sin nombre",
      nombreClave = "Sin nombre clave",
      frase = "Sin frase"
   ) {
      this.nombre = nombre;
      this.nombreClave = nombreClave;
      this.frase = frase;
      Persona._conteo++;
   }

   set setComidaFavorita(comida) {
      this.comida = comida.toUpperCase();
   }

   get getComidaFavorita() {
      return `La comida favorita de ${this.nombre}, es ${this.comida}`;
   }

   quienSoy() {
      console.log(`Soy ${this.nombre} y mi identidad es ${this.nombreClave}`);
   }

   miFrase() {
      console.log(`Esta es mi frase: ${this.frase}`);
   }
}

const spiderman = new Persona("Peter Parker", "Spider Man", "Soy tu vecino");
const ironman = new Persona("Tony Stark", "Iron Man", "Yo soy Iron Man");

// console.log(ironman);

spiderman.quienSoy();
// ironman.miFrase();

spiderman.setComidaFavorita = "Hamburguesa";

// console.log(spiderman);

// Persona._conteo = 2;
console.log("Contéo estático", Persona._conteo);

console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = "Hola mundo externo";
