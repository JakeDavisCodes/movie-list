const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movieList',
});

dbConnection.connect();

module.exports.connection = dbConnection;