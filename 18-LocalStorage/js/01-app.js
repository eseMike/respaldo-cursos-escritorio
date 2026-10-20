localStorage.setItem("nombre", "Mike");
const producto = {
   nombre: "Monitor 24 pulgadas",
   precio: 300,
};

// convertimos un objeto a un JSON para tener valores tipo string
const productoString = JSON.stringify(producto);
console.log(productoString);

localStorage.setItem("producto", productoString);

const meses = ["enero", "febrero", "marzo"];

const meseString = JSON.stringify(meses);
console.log(meseString);

localStorage.setItem("meses", meseString);
