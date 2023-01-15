import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Tests in 11-async-await.js", () => {
  console.log("\n >>> START TEST <<<< \n");

  test("getImage() shhould return an url", async () => {
    const resp = await getImagen();

    expect(resp).not.toBe("Image was not found");
  });
});
