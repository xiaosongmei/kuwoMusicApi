const express = require('express')
const router = express.Router()
const request = require('request')
const requestHeader = require('../utils/request-header')

router.get('/', (req, res, next) => {
    const options = {
        url: 'http://www.kuwo.cn/api/www/radio/index/radioList?',
        headers: Object.assign(requestHeader, {
            Referer: 'http://www.kuwo.cn/rankList'
        }, {})
    }
    request(options, (err, response, body) => {
        if (!err) {
            res.send(JSON.parse(body))
        } else {
            res.sendResult(null, 500, '請求失敗')
        }
    })
})



module.exports = router