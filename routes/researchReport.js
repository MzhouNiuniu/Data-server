var express = require('express');
var router = express.Router();
import controller from '../src/controller'
import authToken from '../utils/authToken'

const model=controller.ResearchReport
router.post('/publish',authToken,model.publish)
router.get('/getList',authToken,model.getList)
router.get('/getListByWeb',model.getListByWeb)
router.post('/delById',authToken,model.delById)
router.post('/updateById',authToken,model.updateById)
router.get('/getDetails',model.getDetails)
router.post('/updateStatusById',authToken,model.updateStatusById)
router.post('/stickById',authToken,model.stickById)
router.get('/getIndex',model.getIndex)

module.exports = router;
