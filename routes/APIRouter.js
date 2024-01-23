const express = require('express');
const APIcontroller = require('../controllers/APIcontroller');
const router = express.Router();
const Controller = require('../controllers/APIcontroller')


//Aca van las rutas de tu API
router.get('/api/products',APIcontroller.list)
router.get('/api/products/:id',APIcontroller.detail)
router.get('/api/brand',APIcontroller.brand)



module.exports = router;