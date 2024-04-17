const express = require('express');
const app = express();
const port = 3006;

app.get('/gustos', (req, res) => {
  res.json({ 
    Nombre: "Alejandro",
    gustos: "Me gusta: salir de pesca, la salsa y vivir en el campo." 
  });
});

app.listen(port, () => {
  console.log(`Servicio de Alejandro ejecutándose en http://localhost:${port}`);
});
