const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(() => resolve('Async'), 2000): reject(new Error('Error'));
    })
}


const anotherFn = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log("Hello");
};


console.log("Before");
anotherFn();
console.log("After");



const lista = ["Apple", "Apple", "Apple"]
const datos__procesados = [];

//Arroy function 
const procesar = (valor) => {
    setTimeout(() => {
        if (valor === "Apple") {
            return "Pineapple"
        }
    }, 3000);
};


// salida 

datos__procesados = lista.map((a) => procesar(a));

console.log("resultado", datos__procesados);