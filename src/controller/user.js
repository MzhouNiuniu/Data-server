const UserModel = require("../model").User;
const formidable = require('formidable');
const {server,siteFunc } = require('../../utils');
const _ = require('lodash')
import  config from '../../config/settings'
class User {
    constructor() {
        // super()
    }

    async loginAction(req, res, next) {
        const  newPsd= server.encrypt(req.query.password, config.encrypt_key);
        req.query.password=newPsd
        let user = await UserModel.findOne(req.query);
        if (!_.isEmpty(user)) {
            let auth_token = user._id
            console.log(auth_token)
            req.session.adminlogined = true;
            req.session.adminUserInfo = user;
            res.cookie(config.auth_cookie_name, auth_token, { path: '/', maxAge: 1000 * 60 * 60 * 24 * 30,sign:true,  httpOnly: true }); //cookie 有效期30天
            res.send(siteFunc.renderApiData(res, 200,'ok',user ))
        }
        else{
            res.send(siteFunc.renderApiData(res, 500, '用户名或密码错误'))
        }

    }
    async regAction(req, res, next) {
            try {
                const  newPsd= server.encrypt(req.query.password,  config.encrypt_key);
                req.query.password=newPsd
                const Vuser=new UserModel(req.query)
                Vuser.validate((err)=>{
                    if(err){
                        const msg = siteFunc.renderApiErr(req, res, 500, err, 'vi')
                        res.send(msg)
                    }
                })
                let  user = await UserModel.find({'userName': req.query.userName})
                if (_.isEmpty(user)) {
                        console.log(Vuser)
                    Vuser.save()
                    res.send(siteFunc.renderApiData(res, 200, '插入成功'))
                }
                else{
                    res.send(siteFunc.renderApiData(res, 500, '数据已经有了'))
                }


            }
            catch (err) {
                res.send(siteFunc.renderApiErr(req, res, 500, err))
            }
    }

}

module.exports = new User();
