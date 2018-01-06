var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(table, column, value) {
    var queryString = "INSERT INTO ?? (??) VALUES (??)";
    console.log(queryString);
    connection.query(queryString, [table, column, value], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(table, columnOne, valueOne, columnTwo, valueTwo) {
    var queryString = "UPDATE ?? SET ?? = ?? WHERE ?? = ?";

    connection.query(queryString, [table, columnOne, valueOne, columnTwo, valueTwo], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
