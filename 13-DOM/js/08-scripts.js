const navegacion = document.querySelector(".navegacion");
// console.log(navegacion);
// console.log(navegacion.childNodes); //Los espacion en blanco son considerados elementos

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[1].nodeType);

const card = document.querySelector(".card");

// card.children[0].src = "img/hacer2.jpg";

// console.log(card.children[0]);

// traversing de dom de hijo a padre
// console.log(card.parentNode);
// console.log(card.parentElement.parentElement);

// console.log(card.nextElementSibling);

const ultimoCard = document.querySelector(".card:nth-child(4)");
console.log(ultimoCard.previousElementSibling);
