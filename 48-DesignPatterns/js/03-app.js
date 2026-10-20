//Singleton

let instancia = null;

class Persona {
   constructor(nombre, apellido) {
      if (!instancia) {
         this.nombre = nombre;
         this.apellido = apellido;
         instancia = this;
      } else {
         return instancia;
      }
   }
}

const persona = new Persona("Mike", "correo@correo");
console.log(persona);

const persona2 = new Persona("Ale", "ale@correo");
console.log(persona2);
