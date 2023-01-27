const express = require('express');
const acController = require('../controllers/ac-controller')

const router = express.Router();

router.get('/list', acController.listAircraft)
router.get('/fin/:fin', acController.getFin)
router.post('/new', acController.addAircraft)



module.exports = router;