const express = require('express');
const acController = require('../controllers/ac-controller');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/list', acController.listAircraft)
router.get('/fin/:fin', acController.getFin)


/*PROTECTED*/
router.use(checkAuth)
router.post('/new', acController.addAircraft)



module.exports = router;