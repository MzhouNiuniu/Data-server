const NewModel = require("../model").News;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
const _ = require('lodash')
import config from '../../config/settings'

class News {
    constructor() {
        // super()
    }
    /**
     * @apiGroup News
     * @publish 发布新闻
     * @api {post} /news/publish 发布新闻
     * @apiParam {string} title  标题
     * @apiParam {string} content  内容
     * @apiSampleRequest  /news/publish
     */
    async publish(req, res, next) {
        try {
            req.body.author=req.session.adminUserInfo
          let model= new NewModel(req.body)
            model.save()
            res.send(siteFunc.renderApiData(res, 200, '插入成功'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup News
     * @getList 获取新闻列表
     * @api {get} /news/getList 获取新闻列表
     * @apiSampleRequest  /news/getList
     */
    async  getList(req, res, next) {
        try {
            let news= await NewModel.find({})
            console.log(news)
            res.send(siteFunc.renderApiData(req, 200, 'ok', news))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup News
     * @getList 获取新闻详情
     * @api {get} /news/getDetails 获取新闻详情
     * @apiSampleRequest  /news/getDetails
     */
    async  getDetails(req, res, next) {
        try {
            let news= await NewModel.find({'_id':req.body.id})
            console.log(news)
            res.send(siteFunc.renderApiData(req, 200, 'ok', news))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup News
     * @delById 删除新闻
     * @api {post} /news/delById 删除新闻
     * @apiSampleRequest  /news/delById
     */
    async  delById(req, res, next) {
        try {
            let news= await NewModel.remove({'_id':req.body.id})
            console.log(news)
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup News
     * @updataById 更新某条新闻
     * @apiParam {string} id  id
     * @api {post} /news/updataById 更新某条新闻
     * @apiParam {string} title  标题
     * @apiParam {string} content  内容
     * @apiSampleRequest  /news/updataById
     */
    async  updataById(req, res, next) {
        try {
            let news= await NewModel.findByIdAndUpdate(req.body.id,req.body)
            console.log(news)
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }



}

module.exports = new News();
