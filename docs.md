## Query Parameters

En un endpoint usando query parameters puedo mandar los datos desde la url, mi back se veria asi:

```js
app.get('/query_parameters', (req, res) => {
    const clave = req.query.clave;
    console.log(clave)
    res.send(`Hola, ${clave}!`);
});
```

Y el front asi:

```js
<a href="/query_parameters?clave=valor">Saludar</a>
<script>
    console.log("Hola")
    fetch("/query_parameters?clave=valor")

</script>
```

Puedo llamar de diferentes formas a /query_parameters, pero siempre tengo que mandarle el dato si quiero hacer algo con el.

## Post request

Esta forma de mandar datos suele hacerse con un formulario html basico

Es *muy* importante añadir la linea del principio o no funcionará, no podremos leer `req.body.mensaje`:

```js
app.use(express.urlencoded({ extended: true }));

app.post('/enviar', (req, res) => {
    const mensaje = req.body.mensaje;
    res.send(`Mensaje recibido: ${mensaje}`);
});
```

El formulario html para este endpoint:

```html
<form action="/enviar" method="POST">
    <input type="text" name="mensaje">
    <button type="submit">Enviar</button>
</form>
```