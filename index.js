const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

let visitas = 0;

app.use(express.static("public"));

app.get("/", (req, res) => {
    visitas++;

    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

app.get("/visitas", (req, res) => {
    res.json({
        visitas: visitas
    });
});

app.listen(PORT, () => {
    console.log(
        `Servidor ejecutándose en http://localhost:${PORT}`
    );
});