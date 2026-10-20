document.addEventListener("visibilitychange", () => {
   if (document.visibilityState === "visible") {
      console.log("Ejecutamos la función para reproducir video");
   } else {
      console.log("Paramos el video");
   }
});
