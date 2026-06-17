const express = require("express");
const path = require("path");
const {
    registrarVisita,
    obtenerVisitas,
    resetearVisitas
} = require("./contador");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    registrarVisita();

    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

app.get("/visitas", (req, res) => {
    res.json({
        visitas: obtenerVisitas()
    });
});

app.listen(PORT, () => {
    console.log(
        `Servidor ejecutándose en http://localhost:${PORT}`
    );
});