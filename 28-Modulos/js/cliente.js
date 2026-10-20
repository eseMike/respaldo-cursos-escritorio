// Variables

export const nombreCliente = "Mike";
export const ahorro = 200;

export function mostrarInfo(cliente, ahorro) {
   return `cliente: ${cliente}, ahorro: ${ahorro}`;
}

// Funciones

export function tienesSaldo(ahorro) {
   if (ahorro > 0) {
      console.log("Si tienes saldo");
   } else {
      console.log("El cliente no tiene saldo");
   }
}

//Clases

export class Cliente {
   constructor(nombre, ahorro) {
      this.nombre = nombre;
      this.ahorro = ahorro;
   }

   mostrarInfo() {
      return `cliente: ${this.nombre}, ahorro: ${ahorro}`;
   }
}

//Exports default
export default function nuevaFuncion() {
   console.log("Este es el expor default");
}
