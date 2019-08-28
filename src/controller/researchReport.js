const Model = require("../model").ResearchReport;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
import config from '../../config/settings'

class ResearchReport {
    constructor() {
        // super()
    }

    /**
     *
     * @apiGroup ResearchReport
     * @publish 发布
     * @api {post} /researchReport/publish 发布
     * @apiParam {string} name  文字名字
     * @apiParam {string} content  内容
     * @apiParam {string} human  研究人
     * @apiParam {string} organization  机构
     * @apiParam {string} accessory  附件
     * @apiParam {string} cover  文号
     * @apiParam {string} reference  封面
     * @apiParam {string} type  //0 专题报告  1定期报告
     * @apiParam {string} brief    简介
     * @apiSampleRequest  /researchReport/publish
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
     * @apiGroup ResearchReport
     * @getList 获取列表
     * @api {get} /researchReport/getList 获取列表
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiParam {string} type  //0 专题报告  1定期报告
     * @apiSampleRequest  /researchReport/getList
     */
    async getList(req, res, next) {
        var keyWords = req.query.keyWords || ''
        var limit = Number(req.query.limit || 10)
        var page = Number(req.query.page || 1)
        var type = Number(req.query.type)
        try {
            let model = await Model.paginate({name: {$regex: keyWords, $options: 'i',$regex:type}}, {limit: limit, page: page,sort:{stick:-1,releaseTime:-1}})
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup ResearchReport
     * @getList 获取详情
     * @api {get} /researchReport/getDetails 获取详情
     * @apiParam {string} id  id
     * @apiSampleRequest  /researchReport/getDetails
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
     * @apiGroup ResearchReport
     * @delById 删除
     * @api {post} /researchReport/delById 删除
     * @apiSampleRequest  /researchReport/delById
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
     * @apiGroup ResearchReport
     * @updateById 更新某条
     * @apiParam {string} id  id
     * @apiParam {string} name  文字名字
     * @apiParam {string} content  内容
     * @apiParam {string} human  研究人
     * @apiParam {string} organization  机构
     * @apiParam {string} accessory  附件
     * @apiParam {string} cover  文号
     * @apiParam {string} reference  封面
     * @api {post} /researchReport/updateById 更新某条
     * @apiSampleRequest  /researchReport/updateById
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
     * @apiGroup ResearchReport
     * @updateStatusById 更新某条的状态（审核）
     * @apiParam {string} id  id
     * @api {post} /researchReport/updateStatusById 更新某条的状态（审核）
     * @apiParam {string} message 拒绝信息
     * @apiParam {string} status  状态  （0未审核   1通过  2未通过 ）
     * @apiSampleRequest  /researchReport/updateStatusById
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
     * @apiGroup ResearchReport
     * @updateStatusById 置顶
     * @apiParam {string} id  id
     * @api {post} /researchReport/stickById 置顶
     * @apiParam {string} stick   0未置顶  1置顶
     * @apiSampleRequest  /researchReport/stickById
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

module.exports = new ResearchReport();
