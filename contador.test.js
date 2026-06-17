const {
    registrarVisita,
    obtenerVisitas,
    resetearVisitas
} = require("./contador");

test("incrementa el contador", () => {

    resetearVisitas();

    registrarVisita();
    registrarVisita();

    expect(obtenerVisitas()).toBe(2);
});

test("resetea el contador", () => {

    registrarVisita();
    registrarVisita();

    resetearVisitas();

    expect(obtenerVisitas()).toBe(0);
});