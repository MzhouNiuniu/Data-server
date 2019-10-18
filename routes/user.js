var express = require('express');
var router = express.Router();
const {  User } = require('../src/controller');
import authToken from '../utils/authToken'
router.post('/reg',User.reg)
router.post('/login',User.login)
router.post('/updateUser',authToken,User.updateUser)
router.post('/updateById',User.updateById)
router.post('/getList',User.getList)
router.get('/getDetails',User.getDetails)
router.post('/test',User.test)


module.exports = router;
