// Acá nos falta express y el router
const express = require('express')
const router = express.Router()
// Aća nos falta traer el controller
const detailController = require('../controllers/detailController');
// Acá definimos las rutas
router.get('/:id' , detailController.detail);

// Acá exportamos el resultado
module.exports = router;