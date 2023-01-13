import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
  test('getSaludo should return > "Hola Aimi"', () => {
    const name = "Aimi";
    const message = getSaludo(name);

    expect(message).toBe("Hola Aimi");
  });
});
