var express = require('express')
var router = express.Router()
var bicicletaController = require('../../cotrollers/API/bicicletaControllerAPI')

router.get('/',bicicletaController.bicicleta_lista)
router.post('/create',bicicletaController.bicicleta_create)
router.delete('/delete',bicicletaController.bicicleta_delete)

module.exports = router;