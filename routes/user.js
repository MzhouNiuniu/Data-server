var express = require('express');
var router = express.Router();
const {  User } = require('../src/controller');
import authToken from '../utils/authToken'
router.post('/reg',User.reg)
router.post('/login',User.login)
router.post('/updateUser',authToken,User.updateUser)
router.post('/getList',User.getList)
router.get('/test',User.test)


module.exports = router;
