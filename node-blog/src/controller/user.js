const { exec } = require('../db/mysql')

const login = (username, password) => {
    const sql = `select username,realname from users where username='${username}' and password = ${password}`
    return exec(sql).then(rows => {
        console.log(sql+"111")
        // console.log(rows[0])
        return rows[0] || {}
    })
}

module.exports = {
    login
}