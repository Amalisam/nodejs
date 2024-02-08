const db = require('mysql2')

const pool = db.createPool({

    host:'localhost',
    user:'root',
    password:'',
    database:'webenthus_blogs',
    port: 3306,
    dateStrings:true,
})

module.exports = pool.promise()