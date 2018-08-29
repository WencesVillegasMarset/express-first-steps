const express = require('express');
const morgan = require('morgan');
const app = express();

const routes = require('./routes');
const routesApi = require('./routes-api')
//settings

app.set('appName', 'Mi Primer Server');

app.set('views', __dirname + '/views')

app.set('view engine', 'ejs');


//middlewares
app.use(morgan('dev'));

//routes
app.use(routes); 
app.use('/api' ,routesApi); 

app.get('*', (req, res) => {
    res.end('Ruta no encontrada!')
});

//start
app.listen(3000, () => {
    console.log('servidor escuchando');
    console.log('Nombre de la App: ', app.get('appName'));
});