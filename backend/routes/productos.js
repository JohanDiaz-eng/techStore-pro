import express from "express";
import Productos from "../models/productos.js";

const router=express.Router();

router.post("/",async function(req, res){
    try {

        const{productId,Nombre,Descripcion,Precio,Image}=req.body;
        const newProduct =new Productos({
            productId,
            Nombre,
            Descripcion,
            Precio,
            Image
        });
        await newProduct.save();

        res.status(201),json({mesagge:"producto guardado con exito"});

        } catch (error) {
            console.error("Error al guardar el producto", error);
            res.status(400).json({
                mesagge:"Error al ingresar el producto"
            });
    }
})
export default router;