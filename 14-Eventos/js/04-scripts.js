const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", validarFormulario);


function validarFormulario(event) {
    event.preventDefault();
    console.log(event.target.action);
}