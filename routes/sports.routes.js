const { Router } = require('express');
const { getSports, createSport, updateSport, deleteSport } = require('../controllers/sports.controllers');

const router = Router();

router.get('/deportes', getSports)

router.get('/agregar', createSport)

router.get('/editar', updateSport)

// router.patch('/', patchUsers)

router.get('/eliminar', deleteSport)



module.exports = router;