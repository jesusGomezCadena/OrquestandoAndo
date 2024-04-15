const express = require('express');
const app = express();
const port = 3001;

app.get('/gustos', (req, res) => {
  res.json({
    Nombre: "Cristian Obando",
    gustos: "Me gusta: la pizza hawaina, las peliculas de superheroes, de acción y la lasaña de pollo."
  });
});

app.listen(port, () => {
  console.log(`Servicio de Cristian ejecutandose en http://localhost:${port}`);
});