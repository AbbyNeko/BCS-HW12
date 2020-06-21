const connection = require("../config/connection.js");
const consoleTable = require("console.table");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {

  selectAll: function(table) {
        let queryString = "SELECT * FROM ?";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.table(result);
        });
  },
    updateColumn: function(id, table, column, newValue) {
        let queryString = "UPDATE ? SET ? = ? WHERE id = ?";
        connection.query(queryString, [table, column, newValue, id], function(err, result) {
            if (err) throw err;
        });
        return true;
    },
    addNewRow: function(table, columns, newData) {
        let queryString = "INSERT INTO ? (??) VALUES(??)";
        connection.query(queryString, [table, columns, newData], function(err, result) {
            if (err) throw err;
        });
        return true;
    }

};

module.exports = orm;
