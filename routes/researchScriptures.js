var express = require('express');
var router = express.Router();
import controller from '../src/controller'
const model=controller.ResearchScriptures
router.post('/publish',model.publish)
router.get('/getList',model.getList)
router.post('/delById',model.delById)
router.post('/updateById',model.updateById)
router.get('/getDetails',model.getDetails)
router.post('/updateStatusById',model.updateStatusById)
router.post('/stickById',model.stickById)


module.exports = router;
