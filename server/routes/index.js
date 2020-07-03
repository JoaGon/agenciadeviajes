const express = require('express');
const router = express.Router();

//controladores
const nosotrosController = require('../controllers/nosotrosController')
const homeController = require('../controllers/homeController')
const viajesController = require('../controllers/viajesController')
const testimonialesController = require('../controllers/testimonialesController')

module.exports = function () {

    router.get('/nosotros', nosotrosController.infoNosotros)
    router.get('/viajes', viajesController.mostrarViajes)
    router.get('/viajes/:id', viajesController.mostrarViaje)
    router.get('/testimoniales', testimonialesController.todosTestimoniales)
    //cuando se llena el formulario
    router.post('/testimoniales', testimonialesController.testimonialGuardar)
    router.get('/', homeController.consultasHomePage)

    return router;
}