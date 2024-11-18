const PORT = 5000;
const express = require("express");

const app = express();

app.listen(5000, () => {
  console.log("Server started on port "+PORT);
});

app.get('/',(req,res)=>{
    res.send("Mensaje de bienvenida")
 })

app.get('/Productos',(req,res)=>{
    res.send("Listado de Productos")
 })

app.use(express.json())

app.post("/Productos", (req, res) => {
  res.send("Creando el producto: \n" + req.body);
});

app.put("/Productos",(req,res)=>{
    res.send("Actualizar producto")
})

app.delete('/Productos',(req,res)=>{
    res.send("borrar un producto")
 })

app.get('/Usuarios',(req,res)=>{
    res.send("listado de usuarios")
 })

app.post('/Usuarios',(req,res)=>{
    res.send("Crear un usuario")
 })

app.put("/Usuarios",(req,res)=>{
    res.send("Actualizar un usuario")
})

app.delete("/Usuarios",(req,res)=>{
    res.send("borrar un usuario")
})