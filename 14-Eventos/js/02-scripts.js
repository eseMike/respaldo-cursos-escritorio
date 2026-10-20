const nav = document.querySelector(".navegacion");

// registrar evento 
nav.addEventListener("mouseout", () => {
    console.log("saliendo en navegacion");

    nav.style.backgroundColor = "transparent";
});

nav.addEventListener("mouseenter", () => {
    console.log("entrando en navegacion");

    nav.style.backgroundColor = "red";
});


//mousedown - similar al click
//click 
//dbclick - al hacer doble click
//mouseup - cuando sueltas el mouse