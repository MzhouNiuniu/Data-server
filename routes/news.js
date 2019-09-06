var express = require('express');
var router = express.Router();
import controller from '../src/controller'
import authToken from '../utils/authToken'

const model=controller.News
router.post('/publish',authToken,model.publish)
router.get('/getList',model.getList)
router.post('/delById',authToken,model.delById)
router.post('/updateById',authToken,model.updateById)
router.get('/getDetails',model.getDetails)
router.post('/updateStatusById',authToken,model.updateStatusById)
router.post('/importExcel',model.importExcel)
router.post('/stickById',authToken,model.stickById)
router.get('/getIndex',model.getIndex)

module.exports = router;
