function Cliente(nombre, saldo) {
   this.nombre = nombre;
   this.saldo = saldo;
}

const mike = new Cliente("Mike", 500);

function formatearCliente(cliente) {
   const {nombre, saldo} = cliente;
   return `El cliente ${nombre} tiene ${saldo} de saldo`;
}

function formatearEmpresa(empresa) {
   const {nombre, saldo, categoria} = empresa;
   return `El cliente ${nombre} tiene ${saldo} de saldo`;
}

console.log(formatearCliente(mike));

function Empresa(nombre, saldo, categoria) {
   this.nombre = nombre;
   this.saldo = saldo;
   this.categoria = categoria;
}

const ccj = new Empresa("Código con Juan", 500, "Cursos en línea");
