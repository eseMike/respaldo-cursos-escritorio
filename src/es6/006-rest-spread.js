//Arrays destructuring 

let fruits = ["Apple", "Banana"];


let [a, b] = fruits;
console.log(a, b);


//object destructuring 

let user = {
    userName: "Mike",
    age: 32
}
let { userName, age } = user;
console.log(userName);


//spreed operator 

let person = {
    name: "Mike",
    age: 32
}

let country = "MX";

let data = {...person, country };

console.log(data);

//rest operator 

function sum(sum, ...values) {
    console.log(values);
    console.log(sum + values[0]);
    return sum + values[0];
}
sum(1, 1, 5, 4);