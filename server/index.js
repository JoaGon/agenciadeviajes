// iimport express
const express = require('express')
const path = require('path')
const routes = require('./routes')

const bodyParser = require('body-parser')
const configs = require('./config')

const db = require('./config/database')

require('dotenv').config({ path: 'variables.env' })

db.authenticate()
    .then(() => console.log('DB conectada'))
    .catch(error => console.log(error))
//configurar express
const app = express();


// Se indica el directorio donde se almacenarán las plantillas 
app.set('views', './views');

// Se indica el motor del plantillas a utilizar
app.set('view engine', 'pug');

//cargar carpeta estatica llamada public
app.use(express.static('public'));


//validar si estamso en desarrillo o en produccion
const config = configs[app.get('env')]

//creamos la variable para el sitio web
app.locals.titulo = config.nombresitioweb


//Muestra el año actual
app.use((req, res, next) => {
    //crea una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    console.log(res.locals);
    return next();
})
//ejecutamos el body parser
app.use(bodyParser.urlencoded({ extended: true }))

//cargar rutas
app.use('/', routes());

//puerto y host para la app
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000


app.listen(port, host, () => {

    console.log('el servidor esta funcionando',port, host);

})