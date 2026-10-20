class Cliente {
   //Agregando el numeral hacemos la propiedad privada
   #nombre;

   constructor(nombre, saldo) {
      this.#nombre = nombre;
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
