
const mysql = require('mysql2/promise');
const { mysqlConfig } = require('./mysqlConfig'); // Import cấu hình MySQL từ mysqlConfig.js

const db = mysql.createPool({
    host: mysqlConfig.HOST,
    user: mysqlConfig.USER,
    password: mysqlConfig.PASSWORD,
    database: mysqlConfig.DB,
    waitForConnections: true,
    connectionLimit: mysqlConfig.POOL.max,
    queueLimit: 0,
});

module.exports = db;
