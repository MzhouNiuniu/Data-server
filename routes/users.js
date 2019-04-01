var express = require('express');
var router = express.Router();
const selectDataController = require('../controller/select-data-controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getSelectData', selectDataController.getSelectData);
module.exports = router;
