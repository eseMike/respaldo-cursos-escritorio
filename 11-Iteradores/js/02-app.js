// for (let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log('Cinco');
//         continue;
//     }
//     console.log(`Número: ${i}`);

// };

const carrito = [
    { nombre: "Monitor de 20 pulgadas", precio: 400 },
    { nombre: "Radio", precio: 300 },
    { nombre: "Ipad", precio: 800, descuento: true },
    { nombre: "Cuaderno", precio: 40 },
    { nombre: "Celular", precio: 1000 },
    { nombre: "Audífonos", precio: 300 },
];

for (let i = 0; i < carrito.length; i++) {
    const element = carrito[i];
    if (element.descuento) {
        console.log(`El artículo ${element.nombre} tiene descuento`);
        continue;
    }
    console.log(element.nombre);
}