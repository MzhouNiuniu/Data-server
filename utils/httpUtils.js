const request = require('request').defaults({jar: true});  //允许携带cookies
const qs = require('querystring');

function getHeader(req) {
    return {
        // 'Authorization': req.cookies.Authorization ? req.cookies.Authorization : ''
        'Authorization': "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsaWNlbnNlIjoib3Jhcm8gbGljZW5zZSIsInVzZXJfbmFtZSI6Ik1UYzJNalU1TXpJd05qVTZNR1ZrTVdFM016UXRZVGhsTXkwME1qUXlMVGcwTURBdE1UUXlNelprWm1Rd1ptVnoiLCJzY29wZSI6WyJzZXJ2ZXIiXSwicm9sZXMiOltdLCJleHAiOjE1NTQzNDMxNjIsImp0aSI6IjFhMjA4YmZhLTE4ZDYtNDkxZC05MGMwLTU3Y2UyMDBkNTUxYyIsImNsaWVudF9pZCI6ImY1cjlkMDA3Yzc0MzQwYjY4MGM4NWNmZHNnZGY0M2tqZCIsInVzZXJuYW1lIjoiMTc2MjU5MzIwNjUifQ.YU5MyVub4L9ux8xsTsDkmQ-norEyFwPNloP34TWoueIrA5xhKCIt-TfG6cmea3R00HR7T30aYUuM0zw-0FiRC4iDSP-8GueAHHIPFMrf1-zk89dD3zo9Ylo_v8H3gW-3kyqd6deoO0XBpjC7haExm2HUnri6ZMMVKchCViE1Nfz3biQ_FvC4MChe_IQ68cWIbbdyT7oeMg7EXXz-ZQTggXseZPYgIC_AU3_h0Z8UJ3I9tJDBmjjYrm9NGDcVvW9fqBeyGK1mpTaQfABUgoQAP8KkTD-idfTrPt2JL-hOeTjTnuhU-Mk-USUNQuTM2AP4nBuuclHJGFz9urngblGesA"
    };
}

class HttpUtils {
    constructor() {
    }

    httpGet(url, params, req) {
        return new Promise((resolve, reject) => request.get({
            url: `${url}?${qs.stringify(params)}`,
            method: 'get',
            headers: Object.assign(getHeader(req), {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}),
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        }))
    }

    httpGetJson(url, params, req) {
        return new Promise((resolve, reject) => request.get({
            url: url,
            method: 'get',
            headers: Object.assign(getHeader(req), {'Content-Type': 'application/json;charset=UTF-8',}),
            data: params
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        }))
    }

    httpPost(url, form, req) {
        return new Promise((resolve, reject) => request.post({
            url: `${url}?${qs.stringify(form)}`,
            method: 'post',
            headers: Object.assign(getHeader(req), {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}),
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        }))
    }

    httpPostJson(url, form, req) {
        return new Promise((resolve, reject) => request.post({
            url: url,
            method: 'post',
            headers: Object.assign(getHeader(req), {'Content-Type': 'application/json;charset=UTF-8',}),
            data: form
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        }))
    }

    httpPut(url, params, req) {
        return new Promise((resolve, reject) => request.get({
            url: `${url}?${qs.stringify(params)}`,
            method: 'put',
            headers: Object.assign(getHeader(req), {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}),
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        }))
    }

    httpPutJson(url, data, req) {
        let header = getHeader(req);
        return new Promise((resolve, reject) => request.put({
            url: url,
            method: 'put',
            headers: header,
            data: data
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        }))
    }

    httpDelete(url, params, req) {
        let header = getHeader(req);
        return new Promise((resolve, reject) => request.delete({
            url: url,
            method: 'delete',
            headers: header,
            data: params
        }, (err, response, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        }))
    }
}

module.exports = new HttpUtils()
