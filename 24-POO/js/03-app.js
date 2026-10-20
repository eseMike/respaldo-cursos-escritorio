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

//Herencia
class Empresa extends Cliente {
   constructor(nombre, saldo, telefono, categoria) {
      super(nombre, saldo);
      this.telefono = telefono;
      this.categoria = categoria;
   }
   static bienvenida() {
      return `Bienvenido al cajero de empresas`;
   }
}

const juan = new Cliente("Juan", 400);
const empresa = new Empresa("Código con juan", 500, 56581111, "Comunitacions");
console.log(empresa);
