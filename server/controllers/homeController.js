
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = async (req, res) => {
    
    const viajes = await Viaje.findAll({
        limit: 3
    })

    const testimoniales = await Testimonial.findAll({
        limit: 3
    })

    res.render('index/index.pug', { mensaje: 'Usando Pug JS en Express', clase: 'home', viajes: viajes, testimoniales: testimoniales })
}