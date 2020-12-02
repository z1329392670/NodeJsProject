const mysql = require('mysql')
const { MYSQL_CONF } = require('../config/db')

const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()


// 统一执行sql的函数
function exec(sql) {
    console.log(sql+'000')
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) return reject(err)
            return resolve(result)
        })
    })
    return promise
}

module.exports = {
    exec
}
