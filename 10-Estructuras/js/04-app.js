const dinero = 400;
const totalApagar = 500;
const tarjeta = true;

if (dinero >= totalApagar) {
    console.log('Puedo pagar');
} else if (tarjeta) {
    console.log('Si puedo pagar, tengo tarjeta');
} else {
    console.log('No puedo pagar, estoy jodido');
}