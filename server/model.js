const db = require('./db').connection;

// db.connect();

module.exports.get = (callback) => {
  const sql = 'SELECT * FROM movies';
  db.query(sql, (err, movies) => {
    // console.log('DB RESPONSE: ', err, movies)
    if (err) {
      callback(err);
    } else {
      callback(null, movies);
    }
  });
};