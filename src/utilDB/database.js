const mysql = require("mysql2");
// const config = require("../config/connfig_income.json");

const pool = mysql.createPool({
    // host: config.host,
    // user: config.user,
    // database: config.database,
    // password: config.password,

    host: "localhost",
    user: "root",
    database: "mydb",
    password: "1234",
});

module.exports = pool.promise();
