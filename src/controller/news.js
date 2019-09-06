const NewModel = require("../model").News;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
import config from '../../config/settings'

class News {
    constructor() {
    }

    /**
     * @apiGroup News
     * @publish 发布新闻
     * @api {post} /news/publish 发布新闻
     * @apiParam {string} title  标题
     * @apiParam {string} content  内容
     * @apiParam {string} source  来源
     * @apiParam {string} type  0  行业动态  1 智库新闻  2 智库动态 3 项目动态
     * @apiParam {string} cover  封面
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
     * @apiParam {string} type  新闻类型
     * @apiSampleRequest  /news/getList
     */
    async getList(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)
        var type = Number(req.query.type)
        try {
            let news = await NewModel.paginate({title: {$regex: keyWords, $options: 'i'},type:type}, {limit: limit, page: page,sort:{stick:-1,releaseTime:-1}})
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
            req.body.releaseTime=moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            let news = await NewModel.findByIdAndUpdate(req.body.id, req.body)
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
     * @apiParam {string} message 拒绝信息
     * @api {post} /news/updateStatusById 更新某条的状态（审核）
     * @apiParam {string} status  状态  （0未审核   1通过  2未通过 ）
     * @apiSampleRequest  /news/updateStatusById
     */
    async updateStatusById(req, res, next) {
        try {
            if(req.body.status==2){
                let model = await NewModel.findById(req.body.id)
                model.status=req.body.status
                model.auditList.push({author:req.session.adminUserInfo,message:req.body.message,releaseTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')})
                let models = await NewModel.findByIdAndUpdate(req.body.id, model)
            }
            else{
                let model = await NewModel.findByIdAndUpdate(req.body.id, {'status': req.body.status})
            }
            res.send(siteFunc.renderApiData(req, 200, 'ok'))

        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }


    /**
     * @apiGroup News
     * @updateStatusById 置顶
     * @apiParam {string} id  id
     * @api {post} /news/stickById 置顶
     * @apiParam {string} stick   0未置顶  1置顶
     * @apiSampleRequest  /news/stickById
     */
    async stickById(req, res, next) {
        try {
            let model = await NewModel.findByIdAndUpdate(req.body.id, {'stick': req.body.stick})
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
            form.maxFieldsSize = 2 * 1024 * 1024;  //大小限制
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
    /**
     * @apiGroup News
     * @importExcel 获取新闻首页信息（审核）
     * @api {get} /news/getIndex 获取新闻首页信息
     */
    async getIndex(req, res, next) {
        try {
            let industryDynamic = await NewModel.find({type: 0}).sort({stick: -1, releaseTime: -1}).limit(5)
            let ideaNew = await NewModel.find({type: 1}).sort({stick: -1, releaseTime: -1}).limit(5)
            let ideaDynamic = await NewModel.find({type: 2}).sort({stick: -1, releaseTime: -1}).limit(5)
            let projectDynamic = await NewModel.find({type: 3}).sort({stick: -1, releaseTime: -1}).limit(5)
            let params={
                industryDynamic,
                ideaNew,
                ideaDynamic,
                projectDynamic
            }
            res.send(siteFunc.renderApiData(req, 200, 'ok',params))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }

    }



}

module.exports = new News();
