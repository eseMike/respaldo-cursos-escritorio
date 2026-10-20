class Persona {
   constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
   }
}

class Cliente {
   constructor(nombre, email) {
      this.nombre = nombre;
      this.email = email;
   }
}

const funcionesPersona = {
   mostrarInformacion() {
      console.log(`Nombre persona: ${this.nombre}, E-mail: ${this.email}`);
   },
};

//añadir Funciones persona a la clase Persona
Object.assign(Persona.prototype, funcionesPersona);

Object.assign(Cliente.prototype, funcionesPersona);

const cliente = new Persona("Mike", "correo@correo.com");
console.log(cliente);

const proveedor = new Cliente("Carlos", "carlos@dongo.mx");

cliente.mostrarInformacion();

proveedor.mostrarInformacion();
