const mysql = require("mysql2");
const config = require("../config/connfig_income.json");

const pool = mysql.createPool({
    host: config.host,
    user: config.user,
    database: config.database,
    password: config.password,
});

module.exports = pool.promise();
