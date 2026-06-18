let visitas = 0;
let x= 5;

function registrarVisita() {
    visitas++;
    return visitas;
}

function obtenerVisitas() {
    return visitas;
}

function resetearVisitas() {
    visitas = 1;
    return visitas;
}

module.exports = {
    registrarVisita,
    obtenerVisitas,
    resetearVisitas
};