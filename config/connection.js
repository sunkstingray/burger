// Pull in required dependencies
var mysql = require("mysql");
var connection;

// Make JawsDB connection if on Heroku or local mySQL if running locally
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
}
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//Export DB connection for models file to use (burger.js)
module.exports = connection;