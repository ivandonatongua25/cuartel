let { body } = require('express-validator');

const validation = [ 

    //Aca van las validaciones del form
    body("name").isString().exists().withMessage("El nombre de producto solo contendrá letras"),
    body("price").isNumeric().exists().withMessage("El precio del producto solo contendrá numeros"),
    body("description").isString().exists().withMessage("La descripcion de producto solo contendrá letras"),
    body("brand_id").isNumeric().exists().withMessage("La marca del producto solo contendrá numeros"),
    body("material_id").isNumeric().exists().withMessage("El Material del producto solo contendrá numeros"),
    body("color_id").isNumeric().exists().withMessage("El color del producto solo contendrá numeros"),
]

module.exports = validation;