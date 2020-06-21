const mysql = require("mysql");

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Password!",
    database: "company_db"
});


connection.connect(function(err) {
    if (err) throw err;
    //console.log("connected!");
});

module.exports = connection;