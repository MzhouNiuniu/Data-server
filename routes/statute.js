import authToken from "../utils/authToken";

var express = require('express');
var router = express.Router();
import controller from '../src/controller'
const model=controller.Statute
router.post('/publish',authToken,model.publish)
router.get('/getList',authToken,model.getList)
router.post('/delById',authToken,model.delById)
router.post('/updateById',authToken,model.updateById)
router.get('/getDetails',authToken,model.getDetails)
router.post('/updateStatusById',authToken,model.updateStatusById)
router.post('/stickById',authToken,model.stickById)
// router.post('/importExcel',model.importExcel)


module.exports = router;
