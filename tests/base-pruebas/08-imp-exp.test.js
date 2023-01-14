import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Tests in 08-imp-exp.js", () => {
  test("getHeroeById should return an hero by ID", () => {
    const id = 1;
    const heroTest = getHeroeById(id);

    expect(heroTest).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById should return undefined if id doesn't exist", () => {
    const id = 100;
    const heroTest = getHeroeById(id);

    expect(heroTest).toBe(undefined);
  });
});
