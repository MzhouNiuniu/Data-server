var express = require('express');
var router = express.Router();
import {renderApiData,renderApiErr} from '../utils/siteFunc'
const {  User } = require('../src/controller');
router.get('/index',(req, res, next)=>{
    next()
},(req, res, next)=>{
    try{
    } catch (err) {
        res.send(renderApiErr(req, res, 500, err, 'object'))
    }
})
router.get('/login', function (req, res, next) {
    res.cookie("Authorization", 'Bearer ' +'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoib3Jhcm8gbGljZW5zZSIsInVzZXJfbmFtZSI6Ik1UTXlNakkwTkRRek1EYzZNR1ZrTVdFM016UXRZVGhsTXkwME1qUXlMVGcwTURBdE1UUXlNelprWm1Rd1ptVnoiLCJzY29wZSI6WyJzZXJ2ZXIiXSwicm9sZXMiOltdLCJleHAiOjE1NTQzNjYwMTMsImp0aSI6IjBlMmNhZGMzLWI2ZGQtNGIwMS04MDBkLWMxMDkyOWM1ZTAxMCIsImNsaWVudF9pZCI6ImY1cjlkMDA3Yzc0MzQwYjY4MGM4NWNmZHNnZGY0M2tqZCIsInVzZXJuYW1lIjoiMTMyMjI0NDQzMDcifQ.MG2kKc4dj8yr6buenNqe37eA6Jt9ljbdl7xxY0os26SCnKw1O1ZgIcFw9rp7J9SDWoLhsEd_iSdGD2GK1SwDRSY7pmGBRYtFW0wUUlK1xIW15TtsRmmK-H5TQQ9SX6nC7zwFZXmvTt0BXufIOO2Dqz5LECjuTOXPzep4SAKm-lnox7cNUfla9JQpEBCeLB5QNLwg2_eycG-CapBMm3e36dw3tfziVxMzPZ5fUX7GIdTL6qlQA7NxgVEATqbBfVjfpjz3NJAGLlc3Zshuvzf3wqdOKl-RWNJpLuIUYeel_LX-AaENUPzXGX1dmp3pcUjg1Nd8x8GwdRfWR9Us9DeuFQ', {
        maxAge: 90000000,
        httpOnly: false
    });
    res.send('success')
});

router.post('/user/reg',User.regAction)
router.post('/user/login',User.loginAction)

module.exports = router;
