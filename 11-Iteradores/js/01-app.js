// for (let i = 0; i <= 10; i++) {
//     console.log(`Numero: ${i}`);
// }

// for (let i = 0; i < 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`El número ${i}, es par`);
//     } else {
//         console.log(`El número ${i}, es impar`);
//     }

// }

const carrito = [
    { nombre: "Monitor de 20 pulgadas", precio: 400 },
    { nombre: "Radio", precio: 300 },
    { nombre: "Ipad", precio: 800 },
    { nombre: "Cuaderno", precio: 40 },
    { nombre: "Celular", precio: 1000 },
    { nombre: "Audífonos", precio: 300 },
];



for (let i = 0; i < carrito.length; i++) {
    const element = carrito[i];
    console.log(element.nombre);
}