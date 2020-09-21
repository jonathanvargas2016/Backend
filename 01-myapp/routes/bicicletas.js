var express = require('express')
var router = express.Router()
var biclicletaController = require('../cotrollers/bicicleta')

//definir el metodo http
router.get('/',biclicletaController.bicicleta_lista);
router.get('/create',biclicletaController.bicicleta_create_get);
router.post('/create',biclicletaController.bicicleta_create_post);
router.post('/:id/delete',biclicletaController.bicicleta_delete_post);

router.get('/:id/update',biclicletaController.bicicleta_update_get);
router.post('/:id/update',biclicletaController.bicicleta_update_post);


module.exports = router;