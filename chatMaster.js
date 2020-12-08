// 主进程
let userController = require('./controller/user')

class ChatMaster {

    constructor() {
        this.map = new Map();
        this.getHttpReq();
    }


    // 接收注册请求
    getHttpReq() {
        userController.start();
    }

    // 接收消息

    // 删除过期成员


}

module.exports = ChatMaster;