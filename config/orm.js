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
            connection.end()
        });
  },
  returnAllData: function(table, cb) {

        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) throw err;
            cb(result);
        });
  },
    updateColumn: function(id, table, column, newValue) {
        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [table, column, newValue, id], function(err, result) {
            if (err) throw err;
            console.log("Update was Successful");
            connection.end()
        });
    },
    addNewRow: function(table, columns, newData) {
        let queryString = "INSERT INTO ?? (??) VALUES(";

        //Adding on ? value depending on count of columns
        let first = true;
        columns.forEach(col => {

            if(first) {
                queryString += '?';
                first = false;
            } else {
                queryString += ', ?';
            }

        });
        queryString += ')';
        
        //Added new values to params array
        let params = [table, columns];

        for(const field in newData) {

           params.push(newData[field]);
            
        }

        connection.query(queryString, params, function(err, result) {
            if (err) throw err;
            console.log(`Successfully added a new record to ${table}`);
            connection.end();
        });
    }

};

module.exports = orm;
