import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Test in 05-funciones.js", () => {
  test("getUser should return an object ", () => {
    const testUser = {
      uid: "ABC123",
      username: "Aimi",
    };

    const user = getUser();

    expect(testUser).toEqual(user);
  });

  test("getUsuarioActivo(), should return an object", () => {
    const testUser = {
      uid: "ABC567",
      username: "Memo",
    };

    const activeUser = getUsuarioActivo(testUser.username);

    expect(testUser).toEqual(activeUser);
  });
});
