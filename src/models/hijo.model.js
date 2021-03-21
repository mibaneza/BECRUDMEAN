const { Schema, model } = require('mongoose');

const hijoSchema =  new Schema(
    {
    idPersona: {type: String, required: true, index: true},
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    nombre_completo: {type:String, required: true},
    fecNac: {type: Date, required: true},
    fecIngreso: {type: Date, required: true},
});
module.exports = model("Hijo",hijoSchema);