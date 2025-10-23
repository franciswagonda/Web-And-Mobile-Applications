
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'Namuli2017',
  database: 'api',
});

pool
  .getConnection()
  .then((connection) => {
    console.log('Database connection established');
    connection.release();
  })  
  .catch((err) => {
    console.error('Error!!:', err.message);
  });


  module.exports = pool;