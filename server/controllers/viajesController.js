const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes/index.pug', { pagina: 'Proximos viajes', viajes: viajes })
}

exports.mostrarViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje/index.pug', { pagina: 'Viaje', viaje: viaje })
}