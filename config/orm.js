const connection = require("./connection.js");
const consoleTable = require("console.table");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {

  selectAll: function(table) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            console.table(result);
            process.exit();
        });
  },
    updateColumn: function(id, table, column, newValue) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, column, newValue, id], function(err, result) {
            if (err) throw err;
            console.log("Update was Successful");
            process.exit();
        });
    },
    addNewRow: function(table, columns, newData) {
        let queryString = "INSERT INTO ?? (??) VALUES(?)";
        connection.query(queryString, [table, columns, newData], function(err, result) {
            if (err) throw err;
            console.log(`Successfully added a new record to ${table}`);
            process.exit();
        });
    }

};

module.exports = orm;
