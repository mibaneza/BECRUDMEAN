const { Schema, model } = require('mongoose');

const personaSchema =  new Schema(
    {
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    nombre_completo: {type:String, required: true},
    fecNac: {type: Date, required: true},
    fecIngreso: {type: Date, required: true},
});
module.exports = model("Persona",personaSchema);