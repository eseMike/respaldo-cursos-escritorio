const cliente = {
   nombre: "Mike",
   balance: 500,
   tipo: "Premium",
};

describe("testing al cliente", () => {
   test("Es Mike", () => {
      expect(cliente).toMatchSnapshot();
   });
});
