const ciudades = ["Londres", "New York", "Madrid", "Paris"];
const ordenes = new Set([123, 321, 131, 432]);
const datos = new Map();

datos.set("nombre", "Mike");
datos.set("Profesión", "Desarrollador Web");


// DEFAULT ITERATOR 
for (let ciudad of ciudades) {
    console.log(ciudad);
}

for (let dato of datos) {
    console.log(dato);
}

//  ENTRIES ITERATOR 
// for (let entry of ciudades.entries()) {
//     console.log(entry);
// }

// for (let entry of ordenes.entries()) {
//     console.log(entry);
// }

// for (let entry of datos.entries()) {
//     console.log(entry);
// }

//VALUES ITERATOR
// for (let value of ciudades.values()) {
//     console.log(value);
// }

// for (let value of ordenes.values()) {
//     console.log(value);
// }

// for (let value of datos.values()) {
//     console.log(value);
// }

// KEYS ITERATOR 
// for (let key of ordenes.keys()) {
//     console.log(key);
// }


