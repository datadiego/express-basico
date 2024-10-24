const express = require('express');
const app = express();
const path = require("path")

//repasar
app.use(express.static(path.join(__dirname, 'public')));

//repasar
app.use(express.urlencoded({ extended: true }));

app.get('/query_parameters', (req, res) => {
    const clave = req.query.clave;
    console.log(clave)
    res.send(`Hola, ${clave}!`);
});

app.post('/enviar', (req, res) => {
    const mensaje = req.body.mensaje;
    res.send(`Mensaje recibido: ${mensaje}`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});