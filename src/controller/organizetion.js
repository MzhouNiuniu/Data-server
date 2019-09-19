const Model = require("../model").Organization;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
import config from '../../config/settings'

class Organization {
    constructor() {
        // super()
    }

    /**
     * @apiGroup Organization
     * @publish 发布
     * @api {post} /organization/publish 发布
     * @apiParam {string} name  姓名
     * @apiParam {string} province  省
     * @apiParam {string} city  市
     * @apiParam {string} district  区
     * @apiParam {string} website  机构网站
     * @apiParam {string} scope  经营范围
     * @apiParam {string} speciality  专业领域
     * @apiParam {string} service  服务内容
     * @apiParam {string} experience  经验
     * @apiParam {string} intro  简介
     * @apiSampleRequest  /expert/publish
     *
     */
    async publish(req, res, next) {
        try {
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
     * @apiGroup Organization
     * @getList 获取列表
     * @api {get} /organization/getList 获取列表
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiSampleRequest  /organization/getList
     */
    async getList(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)

        try {
            let model = await Model.paginate({name: {$regex: keyWords, $options: 'i'}}, {limit: limit, page: page,sort:{stick:-1,releaseTime:-1}})
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

        try {
            let model = await Model.paginate({name: {$regex: keyWords, $options: 'i'},status:1}, {limit: limit, page: page,sort:{stick:-1,releaseTime:-1}})
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Organization
     * @getList 获取详情
     * @api {get} /organization/getDetails 获取详情
     * @apiParam {string} id  id
     * @apiSampleRequest  /organization/getDetails
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
     * @apiGroup Organization
     * @delById 删除
     * @api {post} /organization/delById 删除
     * @apiSampleRequest  /organization/delById
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
     * @apiGroup Organization
     * @updateById 更新某条
     * @apiParam {string} id  id
     * @api {post} /organization/updateById 更新某条
     * @apiParam {string} name  姓名
     * @apiParam {string} province  省
     * @apiParam {string} city  市
     * @apiParam {string} address  详细地址
     * @apiParam {string} district  区
     * @apiParam {string} website  机构网站
     * @apiParam {string} service  服务内容
     * @apiParam {array} experience  经验
     * @apiParam {string} intro  简介
     * @apiSampleRequest  /organization/updateById
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
     * @apiGroup Organization
     * @updateStatusById 更新某条的状态（审核）
     * @apiParam {string} id  id
     * @apiParam {string} message 拒绝信息
     * @api {post} /organization/updateStatusById 更新某条的状态（审核）
     * @apiParam {string} status  状态  （0未审核   1通过  2未通过 ）
     * @apiSampleRequest  /organization/updateStatusById
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
            res.send(siteFunc.renderApiData(req, 200, '操作成功'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }
    /**
     * @apiGroup Organization
     * @updateStatusById 置顶
     * @apiParam {string} id  id
     * @api {post} /organization/stickById 置顶
     * @apiParam {string} stick   0未置顶  1置顶
     * @apiSampleRequest  /organization/stickById
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

module.exports = new Organization();
