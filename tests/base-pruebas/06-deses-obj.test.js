import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Tests in 06-deses-obj.js", () => {
  test("usContext should have the property nombreClave", () => {
    const testObject = {
      nombreClave: "Moyita",
      anios: 3,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    };

    const returnedObject = usContext({
      clave: "Memay",
      nombre: "Guillermo",
      edad: 4,
    });

    console.log(returnedObject);
    expect(returnedObject).toHaveProperty("nombreClave");
  });
});
