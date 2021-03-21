const { Router } = require('express');
const router = Router();
const personaCtrl =  require('../controllers/persona.controller')


router.get('/', personaCtrl.getAll);
router.post('/', personaCtrl.create);
router.get('/:id',personaCtrl.funGetPersona, personaCtrl.get);
router.patch( '/:id',personaCtrl.funGetPersona,personaCtrl.update);
router.delete( '/:id',personaCtrl.funGetPersona,personaCtrl.delete);

module.exports = router;