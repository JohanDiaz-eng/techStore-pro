import express from 'express';
import cors from 'cors';
import "./db/db.js"
import ProductosRoute from "./routes/productos.js";
import userRoutes from './routes/user.js';
import { loginUsuario } from './controllers/login.js';

const app =express();

// habilitar todas las rutas //

app.use(cors());
app.use(express.json());
// primera ruta //

app.get('/',(req,res)=>{
    res.send('bienvenido al curos de node express');
});

app.use("/api/productos", ProductosRoute);
app.use("/api/user", userRoutes);
app.use("/api/login", loginUsuario);

app.listen(8081,()=>console.log('servidor corriendo en http://localhost:8081'));