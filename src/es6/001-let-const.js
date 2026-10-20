var lastname = "Mike";
lastname = "Oscar";
console.log(lastname);


let fruit = "Apple";
fruit = "Kiwi";

console.log(fruit);

const animal = "Dog";
animal = "Cat";

console.log(animal);


const fruit = () => {
    if (true) {
        var fruit1 = "Apple"; //function scope
        let fruit2 = "kiwi"; //Block scope
        const fruit3 = "Banana"; //Block scope
    }

    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
};

fruit();