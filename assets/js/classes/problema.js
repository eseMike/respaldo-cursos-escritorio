const mike = {
   nombre: "Mike",
   edad: 31,
   imprimir() {
      console.log(`El nombre es ${this.nombre} y la edad es: ${this.edad}`);
   },
};

const peter = {
   nombre: "Pedro",
   edad: 15,
};

// mike.imprimir();

//Antigua forma

function Persona(nombre, edad) {
   //    console.log("Se ejecutó esta línea");

   this.nombre = nombre;
   this.edad = edad;
   this.imprimir = function () {
      console.log(`El nombre es ${this.nombre} y la edad es: ${this.edad}`);
   };
}

const maria = new Persona("María", 18);
console.log(maria);

const melissa = new Persona("Melissa", 35);

maria.imprimir();
melissa.imprimir();
