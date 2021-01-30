// Acá nos falta nuestra fuente de datos
const express = require('express');
const plates = require('../database/platos');
// Acá nos falta un objeto literal con las acciones para cada ruta
module.exports = {
    index: (req,res) => {
        res.render('index', {plates}); //Acá el index corresponde al index.ejs, renderizamos el archivo que queremos mostrar. No hace falta aclarar ni carpeta ni extensión del archivo 
    },
    menu: (req,res) => {
        res.render('menu', {plates});
    },
    about: (req,res) => {
        res.render('about');
    }
}
// Acá exportamos el resultado ==> NO LO EXPORTO PORQUE YA HAGO DIRECTO EL MODULE.EXPORTS


