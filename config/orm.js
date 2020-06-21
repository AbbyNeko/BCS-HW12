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
        
        let newValues = ''; 

        for(const field in newData) {

            if(newValues.length > 0) {
                newValues += ', '+newData[field];
            } else {
                newValues += newData[field];
            }
            
        }

        console.log(newValues);

        connection.query(queryString, [table, columns, newValues], function(err, result) {
            if (err) throw err;
            console.log(`Successfully added a new record to ${table}`);
            process.exit();
        });
    }

};

module.exports = orm;
