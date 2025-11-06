import express from 'express';
import cors from 'cors';

const app =express();

// habilitar todas las rutas //

app.use(cors());

// primera ruta //

app.get('/',(req,res)=>{
    res.send('bienvenido al curos de node express');
});

app.listen(8081,()=>console.log('servidor corriendo en http://localhost:8081'));