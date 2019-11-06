const UserModel = require("../model").User;
const db = require("../model").db;
const formidable = require('formidable');
const {server,siteFunc } = require('../../utils');
const _ = require('lodash')
var moment = require('moment')

import  config from '../../config/settings'
class User {
    constructor() {
        // super()
    }

    /**
     * @apiGroup User
     * @apiName 登陆
     * @api {get} /user/login 用户登陆
     * @apiParam {string} userName  用户名
     * @apiParam {string} password  密码
     * @apiSampleRequest  /user/login
     */

    async test(req,res){
        console.log(req.body)
        // console.log(res)
       res.send(req.body)
    }
    async login(req, res, next) {
        const  newPsd= server.encrypt(req.body.password, config.encrypt_key);
        req.body.password=newPsd
        let user = await UserModel.findOne({userName:req.body.userName});
        if (!_.isEmpty(user)&&user.password==req.body.password) {
            let auth_token = user._id
            req.session.adminlogined = true;
            req.session.adminUserInfo = user;
            console.log(user)
            res.cookie('role', user.role, { path: '/', maxAge: 1000 * 60 * 60 * 24 * 30, httpOnly: false }); //cookie 有效期30天
            res.send(siteFunc.renderApiData(res, 200,'ok',user ))
        }
        else{
            res.send(siteFunc.renderApiData(res, 500, '用户名或密码错误'))
        }

    }
    /**
     * @apiGroup User
     * @delById 删除
     * @api {post} /uesr/delById 删除新闻
     * @apiSampleRequest  /uesr/delById
     */
    async delById(req, res, next) {
        try {
            let news = await UserModel.remove({'_id': req.body.id})
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup User
     * @apiName 新增用户
     * @api {post} /user/reg 新增用户
     * @apiParam {string} userName  用户名
     * @apiParam {string} password  密码
     * @apiSampleRequest /user/reg
     */
    async reg(req, res, next) {
            try {
                req.body.releaseTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
                const  newPsd= server.encrypt(req.body.password,  config.encrypt_key);
                req.body.password=newPsd
                const Vuser=new UserModel(req.body)
                Vuser.validate((err)=>{
                    if(err){
                        const msg = siteFunc.renderApiErr(req, res, 500, err, 'vi')
                        res.send(msg)
                    }
                })
                let  user = await UserModel.find({'userName': req.body.userName})
                if (_.isEmpty(user)) {
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

    /**
     * @apiGroup User
     * @updateUser 修改密码
     * @api {post} /user/updateUser 修改密码
     * @apiParam {string} password  密码
     * @apiSampleRequest /user/updateUser
     */
    async updateUser(req, res, next) {
        try {
            const  newPsd= server.encrypt(req.body.password,config.encrypt_key);
            req.body.password=newPsd
            UserModel.updateOne({'password': req.session.adminUserInfo.password},{'password':req.body.password})
            let  user = await UserModel.find({'password':req.body.password})
            req.session.adminUserInfo=user
            res.send(siteFunc.renderApiData(res, 200,'ok',user ))

        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    async updateById(req, res, next){
        try {
            const  newPsd= server.encrypt(req.body.password,config.encrypt_key);
            req.body.password=newPsd
            // req.body.releaseTime=moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            let model = await UserModel.findByIdAndUpdate(req.body.id, req.body)
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    async getDetails(req, res, next) {
        try {
            let news = await UserModel.findById(req.query.id)
            res.send(siteFunc.renderApiData(req, 200, 'ok', news))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup User
     * @updateUser 获取用户列表
     * @api {post} /user/getList 获取用户列表
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiSampleRequest /user/getList
     */
    async getList(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)
        try {
            let model = await UserModel.paginate({userName: {$regex: keyWords, $options: 'i'}}, {limit: limit, page: page})
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }

        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

}

module.exports = new User();
