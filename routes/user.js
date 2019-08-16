var express = require('express');
var router = express.Router();
const {  User } = require('../src/controller');
import authToken from '../utils/authToken'
router.post('/reg',User.reg)
router.get('/login',User.login)
router.post('/updateUser',authToken,User.updateUser)


module.exports = router;
