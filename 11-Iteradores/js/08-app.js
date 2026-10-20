const automovil = {
    modelo: "Camaro",
    year: 1969,
    motor: "6.0",
}



for (const auto in automovil) {
    console.log(`${automovil[auto]}`);
}

for (let [llave, valor] of Object.entries(automovil)) {
    console.log(llave, valor);
}