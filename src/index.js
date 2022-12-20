const app = require('./app/index');
const { APP_PORT } = require('./app/config');
require('./app/dataBase'); // 执行数据库配置文件

app.listen(APP_PORT, () => { // 项目启动端口依据.env文件中的配置
  console.log('Service running~');
});