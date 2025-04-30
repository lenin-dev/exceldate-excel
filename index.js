const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/public/index.html'));
});

app.get('/descargar/archivoEjemplo', (req, res) => {
    const filePath = path.join(__dirname, '../public/index.html');
    res.download(filePath, 'archivoEjemplo.txt', (err) => {
        if (err) {
            console.error('Error al descargar el archivo:', err);
            res.status(500).send('Error al descargar el archivo.');
        }
    });
});

app.listen(PORT, () => {
    console.log("Server escuchando en el puerto: http://localhost:" + PORT);
});
