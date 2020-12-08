let express = require('express')
let app = express()
let db = require('../model/user')
let bodyParser = require('body-parser')
// 解析json格式数据
app.use(bodyParser.json({limit: '1mb'}))
// 参数编码
app.use(bodyParser.urlencoded({
    extended: true
}));

module.exports = {
    start: () => {
        app.post('/registerUser', function (req, res) {
            let user = req.body;
            if (user === null || user === undefined || user === '') {
                res.send("注册失败")
            } else {
                db.addUser(user);
                res.send("注册成功")
            }
        })

        let server = app.listen(8088)
    }
}