var express = require('express');
var router = express.Router();
const selectDataController = require('../controller/select-data-controller')
import login from './login'
/* GET users listing. */
router.get('/', function(req, res, next) {
  // console.log(req.cookies.token)
  res.send('respond with a resource');
});
router.get('/login', function(req, res, next) {
    res.cookie("Authorization",'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoib3Jhcm8gbGljZW5zZSIsInVzZXJfbmFtZSI6Ik1UTXlNakkwTkRRek1EYzZNR1ZrTVdFM016UXRZVGhsTXkwME1qUXlMVGcwTURBdE1UUXlNelprWm1Rd1ptVnoiLCJzY29wZSI6WyJzZXJ2ZXIiXSwicm9sZXMiOltdLCJleHAiOjE1NTQyNzYxMzYsImp0aSI6IjRiMmYyMTE4LTdkZGMtNDkxNy04YTE0LWI0ZGJkN2IyMjZjZiIsImNsaWVudF9pZCI6ImY1cjlkMDA3Yzc0MzQwYjY4MGM4NWNmZHNnZGY0M2tqZCIsInVzZXJuYW1lIjoiMTMyMjI0NDQzMDcifQ.MdOWFyYaPNCNvtc0EdIJ6ZFMtqjOfiJ8Ali2OV2CtEo0rBvFMkPw73TI701-SO1YlAl8DcKW66oKpHHUYKFWtHAIa44XNImWJDaEdsibFDHFNZyldHcbb08q4dOAHQ9nKpiFQTxIDd2o8JWObQYa6o6GQyrjoEKRauAoaNS9MNJ5IoXyEhpCOkZkdXaMIDH4rlEEiJmpjxTyjVUZMw5nufGw3HDS69LrdnP3AANiB2meyP5Ay5Q483o3-k6Ut2p5rqKKGWmnMADfJGWUPQeJxooaTm3U_iJKAFiufmWSpKZifdF4aY7d6JTJiQZLSf6YES82asEBXxchuaf_QZapAQ',{maxAge: 90000000, httpOnly: false});
});
router.get('/getSelectData', selectDataController.getSelectData);
module.exports = router;
