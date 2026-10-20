const cliente = {
   nombre: "Mike",
   balance: 500,
};

describe("Testing al cliente", () => {
   test("El cliente es premium", () => {
      expect(cliente.balance).toBeGreaterThan(400);
   });

   test("El cliente es Juan", () => {
      expect(cliente.nombre).toBe("Mike");
   });

   test("No es otro cliente", () => {
      expect(cliente.nombre).not.toBe("Pedro");
   });

   test("No tiene 500", () => {
      expect(cliente.balance).not.toBe(400);
   });
});
