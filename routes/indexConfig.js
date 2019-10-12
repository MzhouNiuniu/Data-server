var express = require('express');
var router = express.Router();
import controller from '../src/controller'
const model=controller.IndexConfig
router.post('/publish',model.publish)
router.get('/getDetails',model.getDetails)
router.get('/getIndex',model.getIndex)
router.get('/getBigData',model.getBigData)

// router.post('/importExcel',model.importExcel)

module.exports = router;
