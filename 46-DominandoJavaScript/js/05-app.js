//Explicit binding
function persona(el1, el2) {
   console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
   nombre: "Mike",
};

const musicaFav = ["Ska", "Reggae"];

persona.call(informacion, musicaFav[0], musicaFav[1]);
persona.apply(informacion, musicaFav);

const newFn = persona.bind(informacion, musicaFav[0], musicaFav[1]);

newFn();
