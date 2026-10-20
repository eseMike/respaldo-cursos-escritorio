//Remover
localStorage.removeItem("nombre");

// Actualizar
const mesesArray = JSON.parse(localStorage.getItem("meses"));
// console.log(mesesArray);
mesesArray.push("Diciembre");
localStorage.setItem("meses", JSON.stringify(mesesArray));
