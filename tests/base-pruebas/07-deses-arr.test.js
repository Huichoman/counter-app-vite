import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Tests in 07-deses-arr.js", () => {
  test("retornarArreglo(), should return a string and a number", () => {
    const [stringValue, numberValue] = retornaArreglo();

    console.log(typeof stringValue);

    expect(stringValue).toEqual(expect.any(String));
    expect(numberValue).toEqual(expect.any(Number));
  });
});
