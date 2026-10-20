import Citas from "../js/classes/Citas";

describe("Probar clase de citas", () => {
   const citas = new Citas();

   const id = Date.now();

   test("Agregar una nueva cita", () => {
      const citaObj = {
         id,
         mascota: "Hook",
         propietario: "Mike",
         telefono: "234243",
         fecha: "12-13-42",
         hora: "10:30",
         sintomas: "Solo juega",
      };

      citas.agregarCita(citaObj);

      //Prueba
      expect(citas).toMatchSnapshot();
   });

   test("Actualizar cita", () => {
      const citaActualizada = {
         id,
         mascota: "Cali",
         propietario: "Mike",
         telefono: "234243",
         fecha: "12-13-42",
         hora: "10:30",
         sintomas: "Solo juega",
      };

      citas.editarCita(citaActualizada);
      expect(citas).toMatchSnapshot();
   });
});
