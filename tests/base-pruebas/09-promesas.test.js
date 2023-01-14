import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Tests in 09-promesas.js", () => {
  console.log("\n >>> START TEST <<<< \n");

  test("getHeroesByIdAsync should return a hero by ID", () => {
    const id = 1;

    return getHeroeByIdAsync(id).then((hero) => {
      console.log(hero);
      expect(hero.name).toEqual("Batman");
    });
  });

  test("getHeroesByIdAsync should return undefined if hero doesn't exist", (done) => {
    const id = 10;

    getHeroeByIdAsync(id)
      .then((hero) => {
        expect(hero).toBeFalsy();
        done();
      })
      .catch((error) => {
        console.log(error);
        expect(error).toBe("No se pudo encontrar el héroe " + id);
        done();
      });
  });
});
