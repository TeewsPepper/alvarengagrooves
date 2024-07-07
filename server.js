const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();
const port = 3000;

// Habilitar compresión
app.use(compression());

// Servir archivos estáticos desde la carpeta dist
app.use(express.static(path.join(__dirname, 'dist')));

// Servir el archivo robots.txt
app.get('/robots.txt', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'robots.txt'));
});

// Manejar todas las demás rutas y devolver el index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
