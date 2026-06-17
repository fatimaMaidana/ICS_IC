async function verVisitas() {
    const respuesta = await fetch("/visitas");
    const datos = await respuesta.json();

    document.getElementById("resultado").innerText =
        `Cantidad de visitas: ${datos.visitas}`;
}

verVisitas();