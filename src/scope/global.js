// variables 

var a; //Declaración; 
var b = "b"; //Declaración y asignación 
var a = "aa"; //Redeclaración
b = "bb"; //Reasignación


//Global Scope
var fruit = "Banana"; //Global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// inicialiamos dentro de la función, pero no declaramos 

function countries() {
    country = "Colombia";
    console.log(country);
}

countries();
console.log(country);