const request = require('request').defaults({jar: true});  //允许携带cookies
const qs = require('querystring');

function getHeader(token) {
    return {
        'Authorization':token.cookies.Authorization
    };
}

class HttpUtils {
    constructor() {
    }
    httpGet(url, params, token) {
        return new Promise((resolve, reject) => request.get({
            url: `${url}?${qs.stringify(params)}`,
            method: 'get',
            headers: Object.assign(getHeader(token),{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}),
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                if (JSON.parse(body).code === 200 || JSON.parse(body).code === 304 || JSON.parse(body).code === 400) {
                    resolve(JSON.parse(body).data);
                } else if (JSON.parse(body).code === 500) {
                    resolve(JSON.parse(body));
                }
            }
        }))
    }

    httpGetJson(url, params, token) {
        return new Promise((resolve, reject) => request.get({
            url: url,
            method: 'get',
            headers: Object.assign(getHeader(token),{'Content-Type': 'application/json;charset=UTF-8',}),
            data: params
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                if (JSON.parse(body).code === 200 || JSON.parse(body).code === 304 || JSON.parse(body).code === 400) {
                    resolve(JSON.parse(body).data);
                } else if (JSON.parse(body).code === 500) {
                    resolve(JSON.parse(body));
                }
            }
        }))
    }

    httpPost(url, form, token) {
        return new Promise((resolve, reject) => request.post({
            url: `${url}?${qs.stringify(form)}`,
            method: 'post',
            headers: Object.assign(getHeader(token),{'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}),
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                if (JSON.parse(body).code === 200 || JSON.parse(body).code === 304 || JSON.parse(body).code === 400) {
                    resolve(JSON.parse(body));
                } else if (JSON.parse(body).code === 500) {
                    resolve(JSON.parse(body));
                }
            }
        }))
    }

    httpPostJson(url, form, token) {
        return new Promise((resolve, reject) => request.post({
            url: url,
            method: 'post',
            headers: Object.assign(getHeader(token),{'Content-Type': 'application/json;charset=UTF-8',}),
            data: form
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        }))
    }

    httpPutJson(url, data, token) {
        let header = getHeader(token);
        return new Promise((resolve, reject) => request.put({
            url: url,
            method: 'put',
            headers: header,
            data: data
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        }))
    }

    httpDelete(url, params, token) {
        let header = getHeader(token);
        return new Promise((resolve, reject) => request.delete({
            url: url,
            method: 'delete',
            headers: header,
            data: params
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        }))
    }
}

module.exports = new HttpUtils()
