const mysql = require('mysql')
require('dotenv').load();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE
    });
};

connection.connect(err => {
    if (err) {
        console.error(`error connecting: ${err.stack}`);
        return;
    }
    console.log(`connected as id ${connection.threadId}`)
});

module.exports = connection;