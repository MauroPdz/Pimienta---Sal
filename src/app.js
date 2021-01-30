// Módulos
const express = require('express');
const app = express();
// Acá falta uno... 😇
const path = require('path');
// Configuración
app.use(express.static(path.join(__dirname, '../public')));
// Acá falta el template engine
app.set('view engine' , 'ejs');

const mainRouter = require('./routes/mainRouter');
const detailController = require('./routes/detailRouter');
// Rutas
app.use('/' , mainRouter);
app.use('/detalle' , detailController);


app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})