var express = require('express');
var router = express.Router();
const {  News } = require('../src/controller');
import authToken from '../utils/authToken'
router.post('/publish',News.publish)
router.get('/getList',News.getList)
router.post('/delById',News.delById)
router.post('/updataById',News.updataById)
router.get('/getDetails',News.getDetails)



module.exports = router;
