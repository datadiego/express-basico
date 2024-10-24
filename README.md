En un backend con Express, hay varias formas en que puedes recibir datos desde el frontend. Aquí te doy algunos ejemplos minimalistas y simples:

### 1. **Enviar datos por URL (Query Parameters)**

El frontend puede enviar datos usando parámetros en la URL. Express los recibe mediante `req.query`.

**Frontend:**
```html
<a href="/saludo?nombre=Diego">Saludar</a>
```

**Backend:**
```javascript
const express = require('express');
const app = express();

app.get('/saludo', (req, res) => {
    const nombre = req.query.nombre;
    res.send(`Hola, ${nombre}!`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
```

### 2. **Enviar datos por el cuerpo de una petición (POST request)**

Puedes enviar datos en el cuerpo de la solicitud (por ejemplo, usando `fetch` o un formulario).

**Frontend:**
```html
<form action="/enviar" method="POST">
  <input type="text" name="mensaje">
  <button type="submit">Enviar</button>
</form>
```

**Backend:**
```javascript
const express = require('express');
const app = express();

// Middleware para parsear el cuerpo (body) de las solicitudes
app.use(express.urlencoded({ extended: true }));

app.post('/enviar', (req, res) => {
    const mensaje = req.body.mensaje;
    res.send(`Mensaje recibido: ${mensaje}`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
```

### 3. **Enviar datos usando JSON (fetch API)**

Cuando trabajas con APIs, una forma común es enviar datos como JSON en el cuerpo de una petición `POST`.

**Frontend (usando `fetch`):**
```javascript
fetch('/json', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre: 'Diego' })
})
.then(response => response.text())
.then(data => console.log(data));
```

**Backend:**
```javascript
const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

app.post('/json', (req, res) => {
    const { nombre } = req.body;
    res.send(`Hola, ${nombre}!`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
```

### 4. **Enviar datos en la URL (Path Parameters)**

Puedes pasar datos como parte de la URL. Express los recibe a través de `req.params`.

**Frontend:**
```html
<a href="/usuario/123">Ver Usuario</a>
```

**Backend:**
```javascript
const express = require('express');
const app = express();

app.get('/usuario/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Usuario ID: ${id}`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
```

### 5. **Enviar datos por Headers**

El frontend puede enviar datos en los headers de la solicitud.

**Frontend (usando `fetch`):**
```javascript
fetch('/headers', {
    method: 'GET',
    headers: {
        'x-custom-header': 'valorPersonalizado'
    }
})
.then(response => response.text())
.then(data => console.log(data));
```

**Backend:**
```javascript
const express = require('express');
const app = express();

app.get('/headers', (req, res) => {
    const customHeader = req.headers['x-custom-header'];
    res.send(`Header personalizado recibido: ${customHeader}`);
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
```

Estas son algunas de las formas más comunes para enviar datos desde el frontend hacia el backend en una aplicación con Express.
