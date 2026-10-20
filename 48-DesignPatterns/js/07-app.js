const restaurantApp = {};

restaurantApp.platillos = [
   {
      platillo: "Pizza",
      precio: 25,
   },

   {
      platillo: "Hambuguesa",
      precio: 20,
   },

   {
      platillo: "Hot Dog",
      precio: 15,
   },
];

restaurantApp.funciones = {
   mostrarMenu: (platillos) => {
      console.log(`Bienvenidos a nuestro menú`);

      platillos.forEach((platillo, i) => {
         console.log(`${i} - ${platillo.platillo} - $${platillo.precio} `);
      });
   },

   ordenar: (id) => {
      console.log(
         `Tu platillo: ${restaurantApp.platillos[id].platillo}, se está preparando`
      );
   },

   agregarPlatillo: (platillo, precio) => {
      const nuevo = {
         platillo,
         precio,
      };

      restaurantApp.platillos.push(nuevo);
   },
};

const {platillos} = restaurantApp;

restaurantApp.funciones.mostrarMenu(platillos);

restaurantApp.funciones.ordenar(1);

restaurantApp.funciones.agregarPlatillo("Chilaquiles", 35);

restaurantApp.funciones.mostrarMenu(platillos);
