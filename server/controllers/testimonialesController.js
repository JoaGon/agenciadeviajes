const Testimonial = require('../models/Testimoniales');


exports.todosTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales/index.pug', { pagina: 'Testimoniales', testimoniales: testimoniales })

}

exports.testimonialGuardar = async (req, res) => {
    let { name, correo, mensaje } = req.body;
    let errores = []

    if (!name) {
        errores.push({ 'mensaje': 'Agrega tu nombre' })
    }
    if (!correo) {
        errores.push({ 'mensaje': 'Agrega tu correo' })
    }
    if (!mensaje) {
        errores.push({ 'mensaje': 'Agrega tu mensaje' })
    }

    if (errores.length > 0) {
        //MUETSRA LA VISTA CON ERRORES
        console.log('entrea a errores');
        
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales/index.pug', { pagina: 'Testimoniales', errores, name, correo, mensaje, testimoniales: testimoniales })
    } else {
        //guardar en BD
        console.log('guarda');

        Testimonial.create({
            nombre: name,
            correo,
            mensaje
        })
            .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error))
    }
}