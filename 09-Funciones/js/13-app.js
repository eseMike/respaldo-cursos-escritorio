const reproductor = {
    cancion: " ",
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando canción con el ID ${id}`),
    crearPlaylist: nombre => console.log(`Crenado la playlist con el nombre ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo canción ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }

}

reproductor.nuevaCancion = 'Enter Sadman';

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar(55);
reproductor.crearPlaylist("Rock")