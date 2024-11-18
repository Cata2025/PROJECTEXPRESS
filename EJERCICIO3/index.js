const express = require('express');
const app = express();

app.use(express.json());

const puerto = 3000;

let productos = [
    { id: 1, nombre: 'Taza de Harry Potter', precio: 300 },
    { id: 2, nombre: 'FIFA 23 PS5', precio: 1000 },
    { id: 3, nombre: 'Figura Goku Super Saiyan', precio: 100 },
    { id: 4, nombre: 'Zelda Breath of the Wild', precio: 200 },
    { id: 5, nombre: 'Skin Valorant', precio: 120 },
    { id: 6, nombre: 'Taza de Star Wars', precio: 220 }
];

app.get('/products', (req, res) => {
    res.json({
        description: 'Productos',
        items: productos
    });
});

app.post('/products', (req, res) => {
    const nuevoProducto = req.body;
    nuevoProducto.id = productos.length + 1;
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productoActualizado = req.body;
    const productoIndex = productos.findIndex(p => p.id === id);
    if (productoIndex !== -1) {
        productos[productoIndex] = { id, ...productoActualizado };
        res.json(productos[productoIndex]);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
});

app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productoIndex = productos.findIndex(p => p.id === id);
    if (productoIndex !== -1) {
        productos.splice(productoIndex, 1);
        res.status(200).json({ mensaje: 'Producto eliminado' });
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
});

app.get('/products/filter/price', (req, res) => {
    const { min, max } = req.query;
    const productosFiltrados = productos.filter(p => p.precio >= min && p.precio <= max);
    res.json({
        description: 'Productos filtrados por precio',
        items: productosFiltrados
    });
});

app.get('/products/filter/price-range', (req, res) => {
    const productosFiltrados = productos.filter(p => p.precio >= 50 && p.precio <= 250);
    res.json({
        description: 'Productos con precio entre 50 y 250',
        items: productosFiltrados
    });
});

app.get('/products/filter/id/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
});

app.get('/products/filter/name/:nombre', (req, res) => {
    const nombre = req.params.nombre.toLowerCase();
    const productosFiltrados = productos.filter(p => p.nombre.toLowerCase().includes(nombre));
    if (productosFiltrados.length > 0) {
        res.json(productosFiltrados);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
});

app.listen(puerto, () => {
    console.log(`Servidor levantado en el puerto ${puerto}`);
});
