const NewModel = require("../model").News;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');

var node_xlsx = require('node-xlsx');
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
            req.body.author = req.session.adminUserInfo
            let model = new NewModel(req.body)
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
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiSampleRequest  /news/getList
     */
    async getList(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)

        try {
            let news = await NewModel.paginate({title: {$regex: keyWords, $options: 'i'}}, {limit: limit, page: page})
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
     * @apiParam {string} id  id
     * @apiSampleRequest  /news/getDetails
     */
    async getDetails(req, res, next) {
        try {

            let news = await NewModel.find({'_id': req.query.id})
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
    async delById(req, res, next) {
        try {
            let news = await NewModel.remove({'_id': req.body.id})
            console.log(news)
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup News
     * @updateById 更新某条新闻
     * @apiParam {string} id  id
     * @api {post} /news/updateById 更新某条新闻
     * @apiParam {string} title  标题
     * @apiParam {string} content  内容
     * @apiSampleRequest  /news/updateById
     */
    async updateById(req, res, next) {
        try {
            let news = await NewModel.findByIdAndUpdate(req.body.id, req.body)
            console.log(news)
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup News
     * @updateStatusById 更新某条的状态（审核）
     * @apiParam {string} id  id
     * @api {post} /news/updateStatusById 更新某条的状态（审核）
     * @apiParam {string} status  状态  （0未审核   1通过  2未通过 ）
     * @apiSampleRequest  /news/updateStatusById
     */
    async updateStatusById(req, res, next) {
        try {
            let news = await NewModel.findByIdAndUpdate(req.body.id, {'status': req.body.status})
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup News
     * @importExcel 更新某条的状态（审核）
     * @apiParam {string} file  form-data  key为file  value excel
     * @api {post} /news/importExcel 导入新闻
     */
    async importExcel(req, res, next) {
        try {
            var form = new formidable.IncomingForm();
            form.encoding = 'utf-8';
            // form.uploadDir = path.join(__dirname, '../../public/upload/stuUpload/');
            form.keepExtensions = true;//保留后缀
            form.maxFieldsSize = 2 * 1024 * 1024;
            form.parse(req, function (err, fields, files) {
                if (err) {
                    res.send(siteFunc.renderApiErr(req, res, 500, err))
                    return;
                }
                var obj = node_xlsx.parse(files['file'].path);
                obj[0].data.map((item,index)=>{
                    if(index!=0){
                        let params={}
                        obj[0].data[0].map((key,indexs)=>{
                            params[key]=item[indexs]
                        })
                        console.log(params)
                        let model = new NewModel(params)
                        model.save()

                    }
                })
                res.send(siteFunc.renderApiData(req, 200, 'ok'))
            })
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }


}

module.exports = new News();
