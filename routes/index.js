import authToken from "../utils/authToken";

var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/index.html',function(res,req,next){
    req.send('11')
})


module.exports = router;
