/**
 * Created by Administrator on 2015/5/30.
 */

const logUtil = require('./middleware/logUtil')

var siteFunc = {
    // 封装api返回的数据
    renderApiData(res, responseCode, responseMessage, data = {}, type ) {
        if (type == 'getlist') {
            responseMessage = res.__("validate_error_getSuccess", { success: responseMessage })
        }

        let sendData = {
            status: responseCode,
            message: responseMessage,
            server_time: (new Date()).getTime(),
            data
        }
        return sendData;
    },
    renderApiErr(req, res, responseCode, responseMessage, type='object') {
        if (typeof responseMessage == 'object') {
            responseMessage = responseMessage.message;
        }
        if (type == 'save') {
            console.log(res.resdata_savedata_error)
            responseMessage = res.__("resdata_savedata_error", { error: responseMessage })
        } else if (type == 'delete') {
            responseMessage = res.__("resdata_deldata_error", { error: responseMessage })
        } else if (type == 'update') {
            responseMessage = res.__("resdata_updatedata_error", { error: responseMessage })
        } else if (type == 'getlist') {
            responseMessage = res.__("resdata_getlist_error", { error: responseMessage })
        } else if (type == 'checkform') {
            responseMessage = res.__("resdata_checkformdata_error", { error: responseMessage })
        }
        else if (type == 'validate') {
            // console.log(res.ValidationError)
            responseMessage = err.message
        }
        let errorData = {
            status: responseCode,
            message: responseMessage,
            server_time: (new Date()).getTime(),
            data: {}
        }
        // 记录错误日志
        logUtil.error(responseMessage, req);
        return errorData;
    },


};
module.exports = siteFunc;
