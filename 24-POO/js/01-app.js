class Cliente {
   constructor(nombre, saldo) {
      this.nombre = nombre;
      this.saldo = saldo;
   }

   mostrarInfo() {
      return `Cliente: ${this.nombre} con saldo: ${this.saldo}`;
   }

   //Propiedades estáticas
   static bienvenida() {
      return `Bienvenido al cajero`;
   }
}

const juan = new Cliente("Juan", 400);
console.log(juan);
console.log(juan.mostrarInfo());

console.log(Cliente.bienvenida());
