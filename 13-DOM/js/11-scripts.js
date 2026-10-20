const btnFlotante = document.querySelector(".btn-flotante");
const footer = document.querySelector(".footer");

btnFlotante.addEventListener("click", mostrarOcultar);

function mostrarOcultar() {
   footer.classList.toggle("activo");
   this.classList.toggle("activo");
}
