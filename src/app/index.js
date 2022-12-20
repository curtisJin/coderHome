const Koa = require('koa');
const userRouter = require('../router/usersRouter');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser()); // 解析请求入参

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

module.exports = app;