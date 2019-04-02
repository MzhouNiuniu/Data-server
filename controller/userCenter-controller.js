/*
* 个人中心
* */
const API_URL = require('../config/ckApi');
const httpUtils = require('../utils/httpUtils');
var token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoib3Jhcm8gbGljZW5zZSIsInVzZXJfbmFtZSI6Ik1UTTVNVE16TXpNME5qTTZNR1ZrTVdFM016UXRZVGhsTXkwME1qUXlMVGcwTURBdE1UUXlNelprWm1Rd1ptVnoiLCJzY29wZSI6WyJzZXJ2ZXIiXSwicm9sZXMiOltdLCJleHAiOjE1NTQxNzU0NzMsImp0aSI6IjBkZWFiNWJiLWNlZDgtNDFjNi1iMTcwLWM5MTVkNjM4NjMwNyIsImNsaWVudF9pZCI6ImY1cjlkMDA3Yzc0MzQwYjY4MGM4NWNmZHNnZGY0M2tqZCIsInVzZXJuYW1lIjoiMTM5MTMzMzM0NjMifQ.AC7KXujtwHPGkLrbyTaDnAu0t98p8n2By5X2l4ZxjUAbcap_yvz58N47MlCCDPQxd3LBrfR-NbWEoth-4nTxvh0dJ4MRPpeVZS6bDVnzxbKmfrARRe_QyxN1IMJdA_pEDnc9E4jZaSTNR8_NkX3fKle-69xee2Cvnl54OIwu97HlLJRJ7UpKdVhm5Hzey_Jh4SCQ1sZShrTFtBR6J4dDh1_z4oDWfkd-kpiUPq8cCOF-8PeB2M6HSi1M5KGCBpSugsY_8RNZjndvAbSjw-rnipQBLj23MXO_ekien2GoYVJXXIt5bw2C9eXiozYcmzUrIT1G9Aw4mapEtxqjgqBhHQ'
var errResponse = {code: 500, msg: '缺少必要参数'};

class UserCenter {
    constructor() {
    }

    /*
    * 获取我的业绩，我的客户列表
    * @apiParam {String} type 类型:performance我的业绩，customer我的顾客
    * @apiParam {Number} pageSize 每页显示条数
    * @apiParam {Number} pageNum 页码
    * @apiParam {String} date 日期
    * */
    async getCustomOrPerformanceList(req, res, next) {
        let {type} = req.query;
        if (!type) {
            res.send(errResponse);
            return false
        }
        let url,params;
        switch (type) {
            case 'performance':
                let {date} = req.query;
                if (!date) {
                    res.send(errResponse);
                    return false
                }
                params = {date: date};
                url = API_URL.userCenter.getPerformance;
                break;
            case 'customer':
                let {pageNum, pageSize} = req.query;
                if (!pageSize || !pageNum) {
                    res.send(errResponse);
                    return false
                }
                params = {pageNum: pageNum, pageSize: pageSize};
                url = API_URL.userCenter.getMyCustomer;
                break;
        }
        try {
            const result = await httpUtils.httpGet(url, {pageNum: pageNum, pageSize: pageSize}, token);
            res.send(result)
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new UserCenter();
