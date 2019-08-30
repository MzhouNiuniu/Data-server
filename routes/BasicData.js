var express = require('express');
var router = express.Router();
import controller from '../src/controller'
const model=controller.About
router.post('/publish',model.publish)
router.get('/getDetails',model.getDetails)
// router.post('/importExcel',model.importExcel)

module.exports = router;
