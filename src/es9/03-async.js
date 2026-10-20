async function* anotherGeneratior(params) {
    yield await Promise.resolve(1);
    yield await Promise.resolve(5);
    yield await Promise.resolve(3);
}

const other = anotherGeneratior();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log("Hellos");


async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value);
    }
}

const names = arrayOfNames(["Mike", "Ana", "Carlos", "ADri"]);
console.log(names);