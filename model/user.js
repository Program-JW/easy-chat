const mongoClient = require('mongodb').MongoClient;
const config = require('../conf/config');


module.exports = {
    addUser: (user) => {
        mongoClient.connect(config.mongodb.url, function (err, db) {
            let mongo = db.db(config.mongodb.db);
            mongo.collection(config.mongodb.userCollectionName).insertOne(user, (err, res) => {
                if (err) throw err;
                console.log("文档插入成功");
                db.close();
            });
        })
    }
}