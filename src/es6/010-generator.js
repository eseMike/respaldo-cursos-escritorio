function* iterate(array) {
    for (let value of array) {
        yield value;
    }
};

const it = iterate(["Mike", "David", "Ana", "Ulises", "Jeny"]);
console.log(it.next().value);