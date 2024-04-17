const express = require('express');
const app = express();
const port = 3001;

app.get('/gustos', (req, res) => {
  res.json({
    Nombre: "Laura Murillas",
    gustos: "Me gusta: El ultimate frisbee, el dinero, pasar tiempo con mi familia y viajar"
  });
});

app.listen(port, () => {
  console.log(`Servicio de Laura ejecutandose en http://localhost:${port}`);
});