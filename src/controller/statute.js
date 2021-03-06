const Model = require("../model").Statute;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
import config from '../../config/settings'
//法律
class Statute {
    constructor() {
        // super()
    }

    /**
     *
     * @apiGroup Statute
     * @publish 发布
     * @api {post} /statute/publish 发布
     * @apiParam {string} name  文字名字
     * @apiParam {string} content  内容
     * @apiParam {string} reference  文号
     * @apiParam {string} type  0  政策法规  1 指南标准  2 国家性规范文件 3 地方规范文件 4 部门规范文件
     * @apiSampleRequest  /statute/publish
     *
     */
    async publish(req, res, next) {
        try {
            req.body.releaseTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            req.body.author = req.session.adminUserInfo
            let model = new Model(req.body)
            model.save()
            res.send(siteFunc.renderApiData(res, 200, '插入成功'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Statute
     * @getList 获取列表
     * @api {get} /statute/getList 获取列表
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiParam {string} type  0  政策法规  1 指南标准  2 国家性规范文件 3 地方规范文件 4 部门规范文件
     * @apiSampleRequest  /statute/getList
     */
    async getList(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)
        var type = Number(req.query.type)
        try {
            let model = await Model.paginate({name: {$regex: keyWords, $options: 'i'},type:type}, {limit: limit, page: page,sort:{stick:-1,releaseTime:-1}})
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    async getListByWeb(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)
        var type = Number(req.query.type)
        try {
            let model = await Model.paginate({name: {$regex: keyWords, $options: 'i'},type:type,status:1}, {limit: limit, page: page,sort:{stick:-1,releaseTime:-1}})
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    async getIndex(req, res, next) {
        try {
            let policies = await Model.find({type: 0,status:1}).sort({stick: -1, releaseTime: -1}).limit(4)
            let guide = await Model.find({type: 1,status:1}).sort({stick: -1, releaseTime: -1}).limit(4)
            let council = await Model.find({type: 2,status:1}).sort({stick: -1, releaseTime: -1}).limit(5)
            let endemicity = await Model.find({type: 3,status:1}).sort({stick: -1, releaseTime: -1}).limit(5)
            let department = await Model.find({type: 4,status:1}).sort({stick: -1, releaseTime: -1}).limit(5)
            let params={
                policies,
                guide,
                council,
                endemicity,
                department
            }
            res.send(siteFunc.renderApiData(req, 200, 'ok',params))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }

    }

    /**
     * @apiGroup Statute
     * @getList 获取详情
     * @api {get} /statute/getDetails 获取详情
     * @apiParam {string} id  id
     * @apiSampleRequest  /statute/getDetails
     */
    async getDetails(req, res, next) {
        try {
            let model = await Model.find({'_id': req.query.id})
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Statute
     * @delById 删除
     * @api {post} /statute/delById 删除
     * @apiSampleRequest  /statute/delById
     */
    async delById(req, res, next) {
        try {
            let model = await Model.remove({'_id': req.body.id})
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Statute
     * @updateById 更新某条
     * @apiParam {string} id  id
     * @apiParam {string} name  项目名称
     * @apiParam {string} content  内容
     * @apiParam {string} company  公司
     * @apiParam {string} accessory  附件  这里存一个字符串 文件服务正在建
     * @apiParam {string} Tcompany  推广公司
     * @apiParam {string} Tcontact  推广联系方式
     * @apiParam {string} Tphotos  推广二维码
     * @api {post} /statute/updateById 更新某条
     * @apiSampleRequest  /statute/updateById
     */
    async updateById(req, res, next) {

        try {
            req.body.releaseTime=moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
            let model = await Model.findByIdAndUpdate(req.body.id, req.body)
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Statute
     * @updateStatusById 更新某条的状态（审核）
     * @apiParam {string} id  id
     * @api {post} /statute/updateStatusById 更新某条的状态（审核）
     * @apiParam {string} message 拒绝信息
     * @apiParam {string} status  状态  （0未审核   1通过  2未通过 ）
     * @apiSampleRequest  /statute/updateStatusById
     */
    async updateStatusById(req, res, next) {
        try {

            if(req.body.status==2){
                let model = await Model.findById(req.body.id)
                model.status=req.body.status
                model.auditList.push({author:req.session.adminUserInfo,message:req.body.message,releaseTime:moment(new Date()).format('YYYY-MM-DD HH:mm:ss')})
                let models = await Model.findByIdAndUpdate(req.body.id, model)
            }
            else{
                let model = await Model.findByIdAndUpdate(req.body.id, {'status': req.body.status})
            }

            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup Statute
     * @updateStatusById 置顶
     * @apiParam {string} id  id
     * @api {post} /statute/stickById 置顶
     * @apiParam {string} stick   0未置顶  1置顶
     * @apiSampleRequest  /statute/stickById
     */
    async stickById(req, res, next) {
        try {
            let model = await Model.findByIdAndUpdate(req.body.id, {'stick': req.body.stick})
            res.send(siteFunc.renderApiData(req, 200, 'ok'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }


}

module.exports = new Statute();
