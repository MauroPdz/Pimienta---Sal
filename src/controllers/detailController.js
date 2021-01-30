// Acá nos falta nuestra fuente de datos
const platos = require('../database/platos');
// Acá nos falta un objeto literal con las acciones para cada ruta
module.exports = {
    detail: (req,res) => {
        let id = platos.find(plate => {
            return plate.id == req.params.id;
        });
        res.render('detalle', { id });
    },
}
// Acá exportamos el resultado ==> NO LO EXPORTO PORQUE YA HAGO DIRECTO EL MODULE.EXPORTS
