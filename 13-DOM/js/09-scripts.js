// eliminar enlace por si mismo

// const primerEnlace = document.querySelector("a");

// console.log(primerEnlace);
// primerEnlace.remove();

// Eliminar elemento desde el padre

const navegacion = document.querySelector(".navegacion");
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[0]);
