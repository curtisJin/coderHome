// 数据库操作文件

const mysql = require('mysql2');

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
}  = require('./config');

const connection = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
});

connection.getConnection((err, connection) => {
  connection.connect((err) => {
    if (err) {
      console.log('数据库连接失败');
    } else {
      console.log('数据库连接成功');
    }
  })
});

module.exports = connection.promise();