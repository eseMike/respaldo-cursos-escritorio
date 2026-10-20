// Los Symbols nunca van a haber dos iguales

const sym = Symbol();
const sym2 = Symbol();

// if (sym === sym2) {
//    console.log("Son similares");
// } else {
//    console.log("Tienen distincione");
// }

const nombre = Symbol();
const apellido = Symbol();

const persona = {};

//Agregar nombre y apellido como llaves del objeto
persona[nombre] = "Mike";
persona[apellido] = "Albarrán";
persona.tipoCliente = "Premium";
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]);

//Las propiedades que utilizan Symbol no son iterables

//Definir descripción del Symbol
const nombreCliente = Symbol("Nombre Cliente");

const cliente = {};

cliente[nombreCliente] = "Pedro";
console.log(cliente);
