const express = require('express');
require (`dotenv`).config();
const app = express();
const PORT = process.env.PORT || 3003;

const Contenedor = require(`./tp2.js`);
const contenedor = new Contenedor("productos.txt");

app.use (express.json());
app.use (express.urlencoded({extended: true}));

app.get (`/productos`, async (_req, res) => {
    const productos = await contenedor.getAll();
    res.status(200).json(productos);
}
);

app.get ("/productos-random", async (_req, res) => {
    const productos = await contenedor.getAll();
    let random = Math.floor(Math.random()*productos.length);
    res.status(200).json(productos[random]);
}
)





app.listen (PORT, ()=> {
    console.log (`Servidor escuchando en el puerto ${PORT}`);
});