const password = "123456";

describe("Valida que el pass no esté vacío y tenga una extensión de 6 carácteres", () => {
   test("Que el pass tenga 6 caracteres", () => {
      expect(password).toHaveLength(6);
   });

   test("Password no vacío", () => {
      expect(password).not.toHaveLength(0);
   });
});
