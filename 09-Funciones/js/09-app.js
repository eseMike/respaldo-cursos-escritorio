const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function() {
        console.log(`Pausando...`);
    },
    borrar: function(id) {
        console.log(`Borrando canción con el ID ${id}`);
    },

    crearPlaylist: function(nombre) {
        console.log(`Crenado la playlist con el nombre ${nombre}`);
    }
}


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar(55);
reproductor.crearPlaylist("Rock")