window.addEventListener("scroll", () => {
    const premium = document.querySelector(".premium");
    const ubicacion = premium.getBoundingClientRect();

    if (ubicacion.top < 700) {
        console.log("El elemento ya está visible");
    } else {
        console.log("aun no está visible, da mas scroll");
    }
})