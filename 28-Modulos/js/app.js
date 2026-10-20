import nuevaFuncion, {
   nombreCliente,
   ahorro,
   mostrarInfo,
   tienesSaldo,
   Cliente,
} from "./cliente.js";
import {Empresa} from "./empresa.js";

// console.log(nombreCliente);
// console.log(ahorro);

// console.log(mostrarInfo(nombreCliente, ahorro));
// tienesSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente.mostrarInfo());

//importar empresa
const empresa = new Empresa("Código con Juan", 100, "Aprendizaje en linea");
console.log(empresa.mostrarInformacion());

nuevaFuncion();
