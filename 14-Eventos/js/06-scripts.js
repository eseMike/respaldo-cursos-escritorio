// Event bubbling 

const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const tituloDIV = document.querySelector(".titulo");

cardDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("click en card");
})

infoDiv.addEventListener("click", (e) => {
    e.stopPropagation(e);
    console.log("click en info");
})

tituloDIV.addEventListener("click", (e) => {
    e.stopPropagation(e);
    console.log("click en titulo");
})