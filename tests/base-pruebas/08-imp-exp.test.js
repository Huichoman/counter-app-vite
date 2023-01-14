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

  test("getHeroesByOwner should return the filter array", () => {
    const dcHeros = getHeroesByOwner("DC");
    const marvelHeros = getHeroesByOwner("Marvel");

    expect(dcHeros).toHaveLength(3);
    expect(dcHeros).toEqual([
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ]);

    expect(marvelHeros).toHaveLength(2);
    expect(marvelHeros).toEqual([
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },

      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ]);
  });
});
