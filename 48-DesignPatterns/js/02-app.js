// Constructor pattern

class Persona {
   constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
   }
}

class Cliente extends Persona {
   constructor(nombre, email, empresa) {
      super(nombre, email);
      this.empresa = empresa;
   }
}

const cliente = new Cliente("miguel", "correo@correo.com", "Dongo");

console.log(cliente);
