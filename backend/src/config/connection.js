const mysql = require('mysql2')
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || 'TaskManager',
});

connection.connect((err) => {
    if (err) {
      console.error('Falha ao tentar conectar com o banco TaskManager: ' + err.stack);
      return;
    }
    console.log('Conectado ao banco TaskManager como id ' + connection.threadId);
  });

module.exports = connection;