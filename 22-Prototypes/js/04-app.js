function Cliente(nombre, saldo) {
   this.nombre = nombre;
   this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
   let tipo;

   if (this.saldo > 10000) {
      tipo = "Gold";
   } else if (this.saldo > 5000) {
      tipo = "Platinum";
   } else {
      tipo = "Normal";
   }
   return tipo;
};

Cliente.prototype.nombreClienteSaldo = function () {
   return `Nombre: ${this.nombre}, saldo: ${
      this.saldo
   }, Tipo Cliente: ${this.tipoCliente()}`;
};

Cliente.prototype.retiraSaldo = function (retira) {
   this.saldo -= retira;
};

Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente;

// ----------------------------

function Persona(nombre, saldo, telefono) {
   Cliente.call(this, nombre, saldo);
   this.telefono = telefono;
}

const mike = new Persona("Mike", 5000, 55005005005);

console.log(mike);

console.log(mike.saldo);
