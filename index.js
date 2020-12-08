let cluster = require('cluster')
let numCPUs = 1
// let numCPUs = require('os').cpus().length
let ChatMaster = require('./chatMaster')


if(cluster.isMaster){
    console.log('master process start')
    let chatMaster = new ChatMaster();
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork()
    }
    // worker.on("message",(msg)=>{
    //     process.send(msg)
    // })
}else {
    console.log('worker process start')

}