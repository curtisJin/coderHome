const dotenv = require('dotenv');

dotenv.config(); // 将.env文件中的配置加载到process.env中

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
} = process.env;