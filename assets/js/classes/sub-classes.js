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

class Heroe extends Persona {
   clan = "Sin clan";

   constructor(nombre, nombreClave, frase) {
      super(nombre, nombreClave, frase);

      this.clan = "Los Avengers";
   }

   quienSoy() {
      console.log(`Soy${this.nombre} y mi clan es ${this.clan}`);
      super.quienSoy();
   }
}

const spiderman = new Heroe("Peter Parker", "Spider Man", "Soy tu vecino");
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();
