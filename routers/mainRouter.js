const express = require("express");
const router = express.Router();
const mainControllers = require("../controllers/mainController");

// aqui crearemos las rutas 
router.get("/",mainControllers.index);
router.get("/about",mainControllers.about);
router.get("/musica",mainControllers.musica);
router.get("/videos",mainControllers.videos);




module.exports = router;