const express = require("express");
const path = require("path");
const {
    registrarVisita,
    obtenerVisitas
} = require("./contador");

const app = express();
const PORT = process.env.PORT || 3000;

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

app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(
        `Servidor ejecutándose en puerto ${PORT}`
    );
});