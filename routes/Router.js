const express = require('express');
const router = express.Router();
const Validation = require('../middlewares/validation');
const Controller = require('../controllers/Controller')

router.get('/', Controller.index); 

router.get('/home', Controller.home);
router.get("/detail/:id",Controller.detail);

router.get("/create",Controller.add);
router.post("/creat",Validation,Controller.create);

router.get("/edit/:id/",Controller.edit);
router.put("/edit/:id/",Validation,Controller.update);

router.get("/delete/:id/",Controller.delete);
router.delete("/delete/:id/",Controller.destroy);


module.exports = router;