const { Router } = require('express');
const { getSports, createSport, updateSport, deleteSport } = require('../controllers/sports.controllers');

const router = Router();

router.get('/deportes', getSports)

router.post('/agregar', createSport)

router.put('/editar', updateSport)

// router.patch('/', patchUsers)

router.delete('/eliminar', deleteSport)



module.exports = router;