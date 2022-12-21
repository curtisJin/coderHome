const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const userRouter = require('../router/usersRouter');
const loginRouter = require('../router/loginRouter');
const errorHandler = require('./errorHandle');

const app = new Koa();

app.use(bodyParser()); // 解析请求入参

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.use(loginRouter.routes());
app.use(loginRouter.allowedMethods());

app.on('error', errorHandler);
module.exports = app;