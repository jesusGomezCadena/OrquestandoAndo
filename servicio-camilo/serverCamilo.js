const express = require("express");
const app = express();
const PORT = 3004;

app.get("/api/informacion", (req, res) => {
    res.json({
        Autor: "Juan Camilo Ortiz",
        gustos: "Serie favorita: Los Simpson. Equipo favorito de NBA: Golden State Warriors."
    });
});

app.listen(PORT, () => {
    console.log(`El servidor está activo corriendo en el puerto ${PORT}`);
});



