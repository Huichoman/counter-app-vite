test("Esta prueba no debe fallar", () => {
  if (1 === 1) {
    // 1.-
    const message1 = "Hola mundo";

    // 2.-
    const message2 = message1.trim();

    //3.-
    expect(message1).toBe(message2);
  }
});
