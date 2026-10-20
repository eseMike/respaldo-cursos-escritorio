const cliente = {
   nombre: "Mike",
   saldo: 500,
};

console.log(cliente);
console.log(typeof cliente);

function Cliente(nombre, saldo) {
   this.nombre = nombre;
   this.saldo = saldo;
}

const persona1 = new Cliente("Mike", 500);
console.log(persona1);
