const Model = require("../model").Magazine;
const formidable = require('formidable');
const {server, siteFunc} = require('../../utils');
var moment = require('moment')
var node_xlsx = require('node-xlsx');
const _ = require('lodash')
import config from '../../config/settings'
//杂志
class Magazine {
    constructor() {
        // super()
    }

    /**
     * @apiGroup Magazine
     * @publish 发布
     * @api {post} /magazine/publish 发布
     * @apiParam {string} name  姓名
     * @apiParam {string} url  链接
     * @apiParam {string} photos  头像
     * @apiSampleRequest  /magazine/publish
     *
     */
    async publish(req, res, next) {
        try {
            let model = new Model(req.body)
            model.save()
            res.send(siteFunc.renderApiData(res, 200, '插入成功'))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Magazine
     * @getList 获取列表
     * @api {get} /magazine/getList 获取列表
     * @apiParam {string} limit  本页多少条
     * @apiParam {string} page  第几页    （现成框架字段忍受一下）
     * @apiParam {string} keyWords  关键字
     * @apiSampleRequest  /magazine/getList
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
    async getIndex(req, res, next) {
        try {
            let model = await Model.find({}).sort({stick:-1,releaseTime:-1})
            res.send(siteFunc.renderApiData(req, 200, 'ok', model))
        }
        catch (err) {
            res.send(siteFunc.renderApiErr(req, res, 500, err))
        }
    }

    /**
     * @apiGroup Magazine
     * @getList 获取详情
     * @api {get} /magazine/getDetails 获取详情
     * @apiParam {string} id  id
     * @apiSampleRequest  /magazine/getDetails
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
     * @apiGroup Magazine
     * @delById 删除
     * @api {post} /magazine/delById 删除
     * @apiSampleRequest  /magazine/delById
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
     * @apiGroup Magazine
     * @updateById 更新某条
     * @apiParam {string} id  id
     * @api {post} /magazine/updateById 更新某条
     * @apiParam {string} name  姓名
     * @apiParam {string} url  链接
     * @apiParam {string} photos  头像
     * @apiSampleRequest  /magazine/updateById
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
     * @apiGroup Magazine
     * @updateStatusById 置顶
     * @apiParam {string} id  id
     * @api {post} /magazine/stickById 置顶
     * @apiParam {string} stick   0未置顶  1置顶
     * @apiSampleRequest  /magazine/stickById
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

module.exports = new Magazine();
