let visitas = 0;

function registrarVisita() {
    visitas++;
    return visitas;
}

function obtenerVisitas() {
    return visitas;
}

function resetearVisitas() {
    visitas = 0;
    return visitas;
}

module.exports = {
    registrarVisita,
    obtenerVisitas,
    resetearVisitas
};