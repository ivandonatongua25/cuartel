const path = require('path');

const db=require("../database/models/index");
let { validationResult } = require('express-validator');
const express = require('express');
const app = express();
app.use(express.json());
const APIcontroller = {
    list:(req,res)=>{
        db.Products.findAll()
        .then(products =>{
           let respuesta={
            
            meta:{
                status :200,
                total:products.length,
                url:'api/products'
            },
            data: products
           }
           res.json(respuesta)
           
        })
            
       
        
    },
    detail: (req,res)=>{
        db.Products.findByPk(req.params.id)
        .then(productos=>{
            let respuesta={
                meta:{
                    status :200,
                    url:'api/products/:id'
                },
                data: productos

            }
            res.json(respuesta)
        })
    },
    brand:(req,res)=>{
        db.Brand.findAll()
        .then(marcas=>{
            let respuesta={
                meta:{
                    status :200,
                    total:marcas.length,
                    url:'api/brand'
                },
                data: marcas

            }
            res.json(respuesta)
        })

    }

    //Aca va la logica//
    
    }
    
module.exports = APIcontroller