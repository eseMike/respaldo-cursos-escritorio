//weakSet Solamenta aceptan objetos
const weakset = new WeakSet();

const cliente = {
   nombre: "Mike",
   saldo: 100,
};
weakset.add(cliente);
console.log(weakset);

console.log(weakset.has(cliente));
