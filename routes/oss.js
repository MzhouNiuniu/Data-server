var express = require('express');
var router = express.Router();
const { Oss } = require('../src/controller');
var multer  = require('multer')
// var upload = multer({ dest: 'uploads/' })
import authToken from '../utils/authToken'
router.post('/upload', Oss.upload)
router.get('/download',Oss.download)

module.exports = router;
