const mysql = require('mysql')
require('dotenv').load();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE
});

connection.connect( err => {
    if(err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`)
});

module.exports = connection;