const app = require('./app/index');
const { APP_PORT } = require('./app/config');

app.listen(APP_PORT, () => { // 项目启动端口依据.env文件中的配置
  console.log('Service running~');
});