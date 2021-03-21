const { Router } = require('express');
const router = Router();
const hijoCtrl =  require('../controllers/hijo.controller.js')


router.get('/', hijoCtrl.getAll);
router.post('/', hijoCtrl.create);
router.get('/:id', hijoCtrl.funGetHijo, hijoCtrl.get);
router.patch( '/:id', hijoCtrl.funGetHijo,hijoCtrl.update);
router.delete( '/:id', hijoCtrl.funGetHijo,hijoCtrl.delete);
router.get('/persona/:id', hijoCtrl.getAllByPersona);
module.exports = router;