/*
* 下拉框数据
* */
const API_URL = require('../config/ckApi');
const httpUtils = require('../utils/httpUtils');

function provinceFormat(array) {
    let newArr = [];
    array.forEach(item => {
        newArr.push({code: item.id, value: item.name})
    });
    return newArr
}

function changeCityFormat(array) {
    let newArr = [];
    array.forEach(item => {
        newArr.push({code: item.cityCode, value: item.cityName})
    });
    return newArr
}

class selectData {
    constructor() {

    }

    //获取不需要入参的下拉框数据
    async getSelectData(req, res, next) {
        try {
            //获取客户列表（不带企业名称）
            const customsHasNoCompanyName = await httpUtils.httpGetJson(API_URL.selectApi.getCustoms, {}, req);
            //获取客户列表（带企业名称）
            const customsHasCompanyName = await httpUtils.httpGetJson(API_URL.selectApi.getCustomsAndName, {}, req);
            //获取省份列表
            const provinceList = await httpUtils.httpGetJson(API_URL.selectApi.provinceList, {}, req);
            res.send({
                customsHasNoCompanyName: customsHasNoCompanyName,
                customsHasCompanyName: customsHasCompanyName,
                provinceList: provinceFormat(provinceList.list)
            })
        } catch (e) {
            console.log(e)
        }
    }

    //获取需要入参的下拉框数据
    async getSelectDataByParams(req, res, next) {
        try {
            let {all, code} = req.query;
            const result = await httpUtils.httpGet(API_URL.selectApi.getCityData, {all: all, code: code}, req);
            res.send(changeCityFormat(result.list))
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new selectData();
