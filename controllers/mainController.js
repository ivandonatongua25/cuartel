const path = require("path");

const mainController = {
    index : (req,res)=>{
        res.send("inicio menu");
    },
    about : (req,res)=>{
        res.send("sobre mi ");
    },
    musica : (req,res)=>{
        res.send("aqui estara la musica");
    },
    videos : (req,res)=>{
        res.send(" aqui estara los videos")
    }
}

module.exports = mainController;