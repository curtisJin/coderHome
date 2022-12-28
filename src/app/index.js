const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const useRoute = require('../router');

const errorHandler = require('./errorHandle');

const app = new Koa();

app.use(bodyParser()); // 解析请求入参

useRoute(app); // 统一处理路由中间件；

app.on('error', errorHandler);
module.exports = app;