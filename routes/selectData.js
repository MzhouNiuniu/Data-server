const express = require('express');
const router = express.Router();
const selectDataController = require('../controller/select-data-controller');
/**
 * @api {get} /selectData/getSelectData 获取不需要入参的下拉框数据
 * @apiName getSelectData
 * @apiGroup SelectData
 *
 * @apiSuccess {Array} customsHasNoCompanyName 不带企业名称的客户列表.
 * @apiSuccess {Array} customsHasCompanyName  带企业名称的客户列表.
 * @apiSuccess {Array} provinceList  省份列表.
 */
router.get('/getSelectData',selectDataController.getSelectData);

router.get('/getSelectDataByParams',selectDataController.getSelectDataByParams);

module.exports = router;
