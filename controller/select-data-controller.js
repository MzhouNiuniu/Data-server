/*
* 下拉框数据
* */
const API_URL = require('../config/ckApi');
const httpUtils = require('../utils/httpUtils');
var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoib3Jhcm8gbGljZW5zZSIsInVzZXJfbmFtZSI6Ik1UTTVNVE16TXpNME5qTTZNR1ZrTVdFM016UXRZVGhsTXkwME1qUXlMVGcwTURBdE1UUXlNelprWm1Rd1ptVnoiLCJzY29wZSI6WyJzZXJ2ZXIiXSwicm9sZXMiOltdLCJleHAiOjE1NTQxNzU0NzMsImp0aSI6IjBkZWFiNWJiLWNlZDgtNDFjNi1iMTcwLWM5MTVkNjM4NjMwNyIsImNsaWVudF9pZCI6ImY1cjlkMDA3Yzc0MzQwYjY4MGM4NWNmZHNnZGY0M2tqZCIsInVzZXJuYW1lIjoiMTM5MTMzMzM0NjMifQ.AC7KXujtwHPGkLrbyTaDnAu0t98p8n2By5X2l4ZxjUAbcap_yvz58N47MlCCDPQxd3LBrfR-NbWEoth-4nTxvh0dJ4MRPpeVZS6bDVnzxbKmfrARRe_QyxN1IMJdA_pEDnc9E4jZaSTNR8_NkX3fKle-69xee2Cvnl54OIwu97HlLJRJ7UpKdVhm5Hzey_Jh4SCQ1sZShrTFtBR6J4dDh1_z4oDWfkd-kpiUPq8cCOF-8PeB2M6HSi1M5KGCBpSugsY_8RNZjndvAbSjw-rnipQBLj23MXO_ekien2GoYVJXXIt5bw2C9eXiozYcmzUrIT1G9Aw4mapEtxqjgqBhHQ'

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
            const customsHasNoCompanyName = await httpUtils.httpGetJson(API_URL.selectApi.getCustoms, {}, token);
            //获取客户列表（带企业名称）
            const customsHasCompanyName = await httpUtils.httpGetJson(API_URL.selectApi.getCustomsAndName, {}, token);
            //获取省份列表
            const provinceList = await httpUtils.httpGetJson(url.selectApi.provinceList, {}, token);
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
            const result = await httpUtils.httpGet(API_URL.selectApi.getCityData, {all: all, code: code}, token);
            res.send(changeCityFormat(result.list))
        } catch (e) {
            console.log(e)
        }
    }

}

module.exports = new selectData();
