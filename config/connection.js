const mysql = require("mysql");

const connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "Password!"
});


connection.connect(function() {
    if (err) throw err;

});

module.exports = connection;