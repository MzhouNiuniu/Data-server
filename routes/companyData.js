var express = require('express');
var router = express.Router();
import controller from '../src/controller'
const model=controller.companyData
import authToken from '../utils/authToken'
router.post('/publish',authToken,model.publish)
router.get('/getList',authToken,model.getList)
router.post('/delById',authToken,model.delById)
router.post('/updateById',authToken,model.updateById)
router.get('/getListBySearch',model.getListBySearch)

router.get('/getDetails',authToken,model.getDetails)
router.post('/updateStatusById',authToken,model.updateStatusById)
router.get('/getListBySearch',model.getListBySearch)
// router.post('/importExcel',model.importExcel)


module.exports = router;
