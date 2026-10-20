class Persona {
   static porObjeto({nombre, apellido, pais}) {
      return new Persona(nombre, apellido, pais);
   }

   constructor(nombre, apellido, pais) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.pais = pais;
   }

   getInfo() {
      console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
   }
}

const nombre1 = "Melisa";
const apellido1 = "Flores";
const pais1 = "Urugay";

const mike = {
   nombre: "Mike",
   apellido: "Albarrán",
   pais: "México",
};

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(mike);
persona2.getInfo();
