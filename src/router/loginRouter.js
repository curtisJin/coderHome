const Router = require('koa-router');
const { login, success } = require('../controller/loginController');
const { verifyLogin,  verifyAuth } = require('../middleware/authMiddleware'); // 登录校验中间件

const loginRouter = new Router({ prefix: '/login' });

loginRouter.post('/', verifyLogin,  login);
loginRouter.get('/test', verifyAuth, success);

module.exports = loginRouter;