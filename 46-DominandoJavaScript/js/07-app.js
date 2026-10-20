console.log("primero");

setTimeout(() => {
   console.log("Segundo");
}, 0);

console.log("tercero");

setTimeout(() => {
   console.log("Cuarto");
}, 0);

new Promise(function (resolve) {
   resolve("...Desconocido");
}).then(console.log);

console.log("ultimo");
