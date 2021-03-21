const hijoCtrl = {};
const Hijo = require('../models/hijo.model')

hijoCtrl.getAll = async (req, res) => {
    try {
        const hijo = await Hijo.find()
        res.json(hijo)
    } catch (err) {
        res.send('Error'+err)        
    }
};
hijoCtrl.getAllByPersona = async (req, res) => {

    try {
        const hijo = await Hijo.find({idPersona: req.params.id})
        console.log(hijo);
        res.json(hijo)
    } catch (err) {
        res.send('Error'+err)        
    }
 
};

hijoCtrl.create = async (req, res) => {
    const hijoReq = new Hijo({
        idPersona: req.body.idPersona,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nombre_completo: req.body.nombre + ' ' + req.body.apellido,
        fecNac: req.body.fecNac,
        fecIngreso: req.body.fecIngreso,
    });
    try {
        await hijoReq.save()
        res.status(200).send({message : true})
    } catch (err) {
        res.send('Error'+err)        
    }
};

hijoCtrl.get = async (req, res) => {
    res.json(res.hijo)
};

hijoCtrl.update = async (req, res) => {
    condicionalHijo(res,req)
    try {
        const updateByHijo = await  res.hijo.save()
        res.json(updateByHijo);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

}

hijoCtrl.delete = async (req, res) => {
    try {
        await res.hijo.remove()
        res.json({ message: 'Deleted Hijo' })
      } catch (err) {
        res.status(500).json({ message: err.message })
      }
};
hijoCtrl.funGetHijo = async (req, res, next) => {
    let hijo;
    try {
        hijo = await Hijo.findById(req.params.id);
        if(hijo == null){
            return res.status(404).json({ message: 'Cannot find hijo' })
        }
    }catch(err){
        return res.status(500).json({ message: err.message })                
    }    
    res.hijo = hijo
    next()
}

function  condicionalHijo(res, req)  {
    if(req.body.nombre != null && req.body.apellido != null){
        res.hijo.nombre = req.body.nombre;
        res.hijo.apellido = req.body.apellido;
        res.hijo.nombre_completo = req.body.nombre+' '+req.body.apellido
     }else{
        if(req.body.nombre != null){
            res.hijo.nombre = req.body.nombre;
            res.hijo.nombre_completo = req.body.nombre+' '+res.hijo.apellido
        }
        if(req.body.apellido != null){
            res.hijo.apellido = req.body.apellido;
            res.hijo.nombre_completo = res.hijo.nombre+' '+req.body.apellido
        }
    }
    if(req.body.idPersona != null){
        res.hijo.idPersona = req.body.idPersona;
     }
     if(req.body.fecNac != null){
        res.hijo.fecNac = req.body.fecNac;
     }
     if(req.body.fecIngreso != null){
        res.hijo.fecIngreso = req.body.fecIngreso;
     } 
}
module.exports = hijoCtrl;