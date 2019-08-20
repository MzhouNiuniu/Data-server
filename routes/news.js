var express = require('express');
var router = express.Router();
const {  News } = require('../src/controller');
import authToken from '../utils/authToken'
router.post('/publish',News.publish)
router.get('/getList',News.getList)
router.post('/delById',News.delById)
router.post('/updateById',News.updateById)
router.get('/getDetails',News.getDetails)
router.post('/updateStatusById',News.updateStatusById)
router.post('/importExcel',News.importExcel)


module.exports = router;
