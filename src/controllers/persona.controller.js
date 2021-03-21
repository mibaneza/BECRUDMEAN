const personaCtrl = {};
const Persona = require('../models/persona.model')

personaCtrl.getAll = async (req, res) => {
    try {
        const persona = await Persona.find()
        res.json(persona)
    } catch (err) {
        res.send('Error'+err)        
    }
};

personaCtrl.create = async (req, res) => {
    const personaReq = new Persona({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nombre_completo: req.body.nombre + ' ' + req.body.apellido,
        fecNac: req.body.fecNac,
        fecIngreso: req.body.fecIngreso,
    });
    try {
         const saveByPersona = await personaReq.save()
        res.status(200).json(saveByPersona);
    } catch (err) {
        res.send('Error'+err)        
    }
};

personaCtrl.get = async (req, res) => {
    res.json(res.persona)
};

personaCtrl.update = async (req, res) => {
    condicionalPersona(res,req)
    try {
        const updateByPersona = await  res.persona.save()
        res.status(200).json(updateByPersona);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

}

personaCtrl.delete = async (req, res) => {
    try {
        await res.persona.remove()
        res.json({ message: 'Deleted Persona' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
};


personaCtrl.funGetPersona = async (req, res, next) => {
    let persona;
    try {
        persona = await Persona.findById(req.params.id);
        if(persona == null){
            return res.status(404).json({ message: 'Cannot find persona' })
        }
    }catch(err){
        return res.status(500).json({ message: err.message })                
    }    
    res.persona = persona
    next()
}

function  condicionalPersona(res, req)  {
    if(req.body.nombre != null && req.body.apellido != null){
        res.persona.nombre = req.body.nombre;
        res.persona.apellido = req.body.apellido;
        res.persona.nombre_completo = req.body.nombre+' '+req.body.apellido
     }else{
        if(req.body.nombre != null){
            res.persona.nombre = req.body.nombre;
            res.persona.nombre_completo = req.body.nombre+' '+res.persona.apellido
        }
        if(req.body.apellido != null){
            res.persona.apellido = req.body.apellido;
            res.persona.nombre_completo = res.persona.nombre+' '+req.body.apellido
        }
    }
     if(req.body.fecNac != null){
        res.persona.fecNac = req.body.fecNac;
     }
     if(req.body.fecIngreso != null){
        res.persona.fecIngreso = req.body.fecIngreso;
     } 
}
module.exports = personaCtrl;