var express = require('express');
var router = express.Router();
import {sendMessage, loginByCode} from '../controller/login-controller'

router.get('/index',(req, res, next)=>{
    res.send('success')
})
router.get('/login', function (req, res, next) {
    res.cookie("Authorization", 'Bearer ' +'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoib3Jhcm8gbGljZW5zZSIsInVzZXJfbmFtZSI6Ik1UTXlNakkwTkRRek1EYzZNR1ZrTVdFM016UXRZVGhsTXkwME1qUXlMVGcwTURBdE1UUXlNelprWm1Rd1ptVnoiLCJzY29wZSI6WyJzZXJ2ZXIiXSwicm9sZXMiOltdLCJleHAiOjE1NTQzNjYwMTMsImp0aSI6IjBlMmNhZGMzLWI2ZGQtNGIwMS04MDBkLWMxMDkyOWM1ZTAxMCIsImNsaWVudF9pZCI6ImY1cjlkMDA3Yzc0MzQwYjY4MGM4NWNmZHNnZGY0M2tqZCIsInVzZXJuYW1lIjoiMTMyMjI0NDQzMDcifQ.MG2kKc4dj8yr6buenNqe37eA6Jt9ljbdl7xxY0os26SCnKw1O1ZgIcFw9rp7J9SDWoLhsEd_iSdGD2GK1SwDRSY7pmGBRYtFW0wUUlK1xIW15TtsRmmK-H5TQQ9SX6nC7zwFZXmvTt0BXufIOO2Dqz5LECjuTOXPzep4SAKm-lnox7cNUfla9JQpEBCeLB5QNLwg2_eycG-CapBMm3e36dw3tfziVxMzPZ5fUX7GIdTL6qlQA7NxgVEATqbBfVjfpjz3NJAGLlc3Zshuvzf3wqdOKl-RWNJpLuIUYeel_LX-AaENUPzXGX1dmp3pcUjg1Nd8x8GwdRfWR9Us9DeuFQ', {
        maxAge: 90000000,
        httpOnly: false
    });
    res.send('success')
});

/**
 * @api {get} /sendMessage 获取登陆验证码
 * @apiName sendMessage
 * @apiGroup login
 *
 * @apiParam {Number} phone 手机号.
 */
router.get('/sendMessage', sendMessage);

/**
 * @api {get} /loginByCode 验证码登陆
 * @apiName loginByCode
 * @apiGroup login
 *
 * @apiParam {Number} code 手机验证码.
 * @apiParam {Number} phone 手机号.
 */
router.get('/loginByCode', loginByCode);

module.exports = router;
